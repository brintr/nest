// Run the script
console.log("Starting content script.");

// Initialize the image ad detector
const detector = new window.ImageAdDetector();
console.log("Created ImageAdDetector instance");

// Function to check if a tweet contains gambling ad images
async function isGamblingAd(tweetElement) {
    try {
        console.log("Checking tweet for gambling ads:", tweetElement);
        const result = await detector.predict(tweetElement);
        console.log("Detection result:", result);
        if (result) {
            console.log("Gambling ad detected in tweet");
        }
        return result;
    } catch (error) {
        console.error("Error checking tweet:", error);
        return false;
    }
}

// Function to hide gambling ads
async function hideGamblingAds() {
    try {
        console.log("Starting to hide gambling ads...");
        const tweets = document.querySelectorAll('article[data-testid="tweet"]');
        console.log("Found tweets:", tweets.length);
        
        for (const tweet of tweets) {
            // Skip if already hidden
            if (tweet.style.display === 'none') continue;
            
            console.log("Processing tweet:", tweet);
            const result = await isGamblingAd(tweet);
            if (result) {
                console.log("Hiding gambling ad tweet:", tweet);
                tweet.style.display = 'none';
                // Also remove the parent container to prevent layout shifts
                const container = tweet.closest('div[data-testid="cellInnerDiv"]');
                if (container) {
                    container.style.display = 'none';
                }
            }
        }
    } catch (error) {
        console.error("Error hiding gambling ads:", error);
    }
}

// Debounce function to limit how often we check for ads
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Create a debounced version of hideGamblingAds
const debouncedHideGamblingAds = debounce(hideGamblingAds, 500);

// Promoted ad blocking
var adsHidden = 0;
var adSelector = "div[data-testid=placementTracking]";
var trendSelector = "div[data-testid=trend]";
var userSelector = "div[data-testid=UserCell]";
var articleSelector = "article[data-testid=tweet]";

var sponsoredSvgPath = 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.876-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z';
var sponsoredBySvgPath = 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z';
var youMightLikeSvgPath = 'M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z';
var adsSvgPath = 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z';
var xAd = '>Ad<';
const promotedTweetTextSet = new Set(['Promoted Tweet', 'プロモツイート']);

function getAds() {
  return Array.from(document.querySelectorAll('div')).filter(function(el) {
    var filteredAd;

    if (el.innerHTML.includes(sponsoredSvgPath)) {
      filteredAd = el;
    } else if (el.innerHTML.includes(sponsoredBySvgPath)) {
      filteredAd = el;
    } else if (el.innerHTML.includes(youMightLikeSvgPath)) {
      filteredAd = el;
    } else if (el.innerHTML.includes(adsSvgPath)) {
      filteredAd = el;
    } else if (el.innerHTML.includes(xAd)) {
      filteredAd = el;
    } else if (promotedTweetTextSet.has(el.innerText)) {
      filteredAd = el;
    }

    return filteredAd;
  })
}

function hideAd(ad) {
  if (ad.closest(adSelector) !== null) {
    ad.closest(adSelector).remove();
    adsHidden += 1;
  } else if (ad.closest(trendSelector) !== null) {
    ad.closest(trendSelector).remove();
    adsHidden += 1;
  } else if (ad.closest(userSelector) !== null) {
    ad.closest(userSelector).remove();
    adsHidden += 1;
  } else if (ad.closest(articleSelector) !== null) {
    ad.closest(articleSelector).remove();
    adsHidden += 1;
  } else if (promotedTweetTextSet.has(ad.innerText)) {
    ad.remove();
    adsHidden += 1;
  }

  console.log('X ads hidden: ', adsHidden.toString());
}

function getAndHideAds() {
  getAds().forEach(hideAd)
}

// hide ads on page load
document.addEventListener('load', () => getAndHideAds());

// oftentimes, tweets render after onload. LCP should catch them.
new PerformanceObserver((entryList) => {
  getAndHideAds();
}).observe({type: 'largest-contentful-paint', buffered: true});

// re-check as user scrolls
document.addEventListener('scroll', () => getAndHideAds());

// re-check as user scrolls tweet sidebar (exists when image is opened)
var sidebarExists = setInterval(function() {
  let timelines = document.querySelectorAll("[aria-label='Timeline: Conversation']");

  if (timelines.length == 2) {
    let tweetSidebar = document.querySelectorAll("[aria-label='Timeline: Conversation']")[0].parentElement.parentElement;
    tweetSidebar.addEventListener('scroll', () => getAndHideAds());
  }
}, 500);

var subscribeToPremiumExists = setInterval(function() {
  let timeline = document.querySelector("aside[aria-label='Subscribe to Premium']");
  if (timeline) { timeline.remove() }
}, 500);

var upgradeToPremiumPlusExists = setInterval(function() {
  let timeline = document.querySelector("aside[aria-label='Upgrade to Premium+']");
  if (timeline) { timeline.remove() }
}, 500);

// Observe DOM changes to catch new tweets
const observer = new MutationObserver((mutations) => {
    let shouldCheck = false;
    for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
            shouldCheck = true;
            break;
        }
    }
    if (shouldCheck) {
        debouncedHideGamblingAds();
    }
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial check
hideGamblingAds();

// Check periodically for any missed tweets
setInterval(hideGamblingAds, 5000);

//⠀⠀⠀⠀⠀⠀⣀⣤⣶⣶⣿⢿⣿⣿⣷⣶⣦⣤⡀⠀
//⠀⠀⢾⡻⣶⣾⣿⣿⣛⣻⣮⡉⣿⣿⣿⠟⠋⠉⠀⠀
//⠀⠀⢸⢿⢿⣿⡿⠁⣀⠀⢛⣿⣿⣿⣷⣦⣄⠀⠀   fuck stake! 
//⠀⠀⢸⠈⣿⣿⠁⠀⣿⡇⢸⡏⢻⣿⣿⣿⣿⣷⡄⠀      
//⠀⠀⢰⣦⣝⠁⡀⠀⢙⠡⠚⠣⣾⣿⡿⠿⠿⠿⢿⡄
//⠀⠀⠀⠈⠡⡀⠀⠀⠀⠄⠚⣰⣿⣿⣷⡄⠀⠀⠀⠀
//⠀⠀⠀⢀⡔⡈⡲⠂⠰⠶⢟⡉⠿⢿⣿⣧⠀⠀⠀⠀
//⠀⠀⠀⠫⣓⠣⢀⡣⡀⠀⡔⣹⣧⠀⠉⠃⠀⠀⠀⠀
//⠀⠀⠀⠀⠑⢄⣀⣀⣶⣶⠟⠛⠿⡀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⣿⡏⢿⡏⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⢠⠉⠻⠏⣺⣷⠔⡄⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⢀⣤⡒⢤⣀⡆⠀⠀⠀⢐⠀⠀⠀⠀⠀⠀⠀⠀
//⢀⡾⣋⣵⣾⡀⣿⣿⣶⢂⡌⣍⠆⠀⠀⠀⠀⠀⠀⠀
//⠘⠛⠛⠛⠛⠃⠉⠙⢏⣾⣧⢹⣿⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣾⡏⠀⠀⠀