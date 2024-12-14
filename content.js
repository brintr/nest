// Function to hide tweets from blocked accounts
function hideBlockedAccounts() {
  const blockedAccounts = ["ineedrare", "realcrazyclip", "LeDauof_"];
  const tweets = document.querySelectorAll('[data-testid="tweet"]');

  tweets.forEach(tweet => {
    const userElement = tweet.querySelector('[href^="/"]');
    if (userElement) {
      const username = userElement.getAttribute('href').substring(1);
      if (blockedAccounts.includes(username)) {
        tweet.remove();
      }
    }
  });
}

// Function to hide promoted tweets
function hidePromotedTweets() {
    const promoted = document.querySelectorAll('[data-testid="placementTracking"]');
    promoted.forEach(tweet => tweet.remove());
  }
  
  // Replace the X logo if the setting is enabled
  function replaceXLogo() {
    const logoContainer = document.querySelector('.css-146c3p1');
    if (logoContainer) {
      const newLogo = document.createElement('img');
      newLogo.src = chrome.runtime.getURL('images/twitter.png');
      newLogo.alt = 'Twitter Logo';
      newLogo.style.width = '100%';
      newLogo.style.height = '100%';
      newLogo.style.objectFit = 'contain';
      logoContainer.innerHTML = ''; // Remove existing content
      logoContainer.appendChild(newLogo);
    }
  }
  
  // Load saved settings and apply changes
  chrome.storage.sync.get(['blockAds', 'blockStake', 'replaceLogo'], (result) => {
    if (result.blockAds) hidePromotedTweets();
    if (result.blockStake) hideBlockedAccounts();
    if (result.replaceLogo) replaceXLogo();
  });
  
  // Monitor changes to settings and reapply dynamically
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.blockAds) {
      if (changes.blockAds.newValue) hidePromotedTweets();
    }
    if (changes.blockStake) {
      if (changes.blockStake.newValue) hideBlockedAccounts();
    }
    if (changes.replaceLogo) {
      if (changes.replaceLogo.newValue) {
        replaceXLogo();
      } else {
        location.reload(); // Reload to restore original logo
      }
    }
  });
  
  // Periodically check for new elements
  setInterval(() => {
    chrome.storage.sync.get(['blockAds', 'blockStake'], (result) => {
      if (result.blockAds) hidePromotedTweets();
      if (result.blockStake) hideBlockedAccounts();
    });
  }, 1000);