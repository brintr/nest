// Run the script
console.log("Starting content script.");

// Initialize the image ad detector
const detector = new window.ImageAdDetector();
console.log("Created ImageAdDetector instance");

// Initialize extension state
let isEnabled = true;
chrome.storage.sync.get(['isEnabled'], function(result) {
    isEnabled = result.isEnabled !== false;
    console.log("Initial extension state:", isEnabled);
});

// Listen for toggle messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggle") {
        isEnabled = request.isEnabled;
        console.log("Extension state changed to:", isEnabled);
        if (isEnabled) {
            hideGamblingAds();
        }
    }
});

// Function to check if a tweet contains gambling ad images
async function isGamblingAd(tweetElement) {
    if (!isEnabled) return false;
    
    try {
        console.log("Checking tweet for gambling ads:", tweetElement);
        const result = await detector.predict(tweetElement);
        console.log("Detection result:", result);
        if (result && result.isAd) {
            console.log("Gambling ad detected in tweet for company:", result.company);
        }
        return result && result.isAd;
    } catch (error) {
        console.error("Error checking tweet:", error);
        return false;
    }
}

// Function to hide gambling ads
async function hideGamblingAds() {
    if (!isEnabled) return;
    
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
                // Notify popup about removed ad
                chrome.runtime.sendMessage({action: "updateCounter"});
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