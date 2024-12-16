function hideBlockedAccounts() {
  const blockedAccounts = [
    "ineedrare", "realcrazyclip", "LeDauof", "CFC_dennoh", "CFCms3",
    "saintmufc", "TheWavyRed", "FCBLamine", "CFCLavia", "PaamanuelUtd",
    "cfcpriiest", "CFCKen", "LSPN_FC", "FootbalIhub", "AFC_Jerry",
    "Utdjacobi", "fodenempire", "WORLDOFCLIPS", "willclapyogirl",
    "Fightsbro", "jazziewontmiss", "justlifeinnit", "killkodak", "livitsIvy",
    "CFC_Carneyy", "ystrayz", "N3onHQ", "ryohzzz", "vinhlegacy", "AdxmAFC",
    "DestUTD", "FightMaster", "picsthatg0hard", "cagiago", "bestfights_ko",
    "hoodcrazy", "fuckstake", "Vigoz_909", "AlbicelesteTalk", "AmorimEra",
    "ihybeto", "DahiannaXo", "Clipper1", "wilddiscord", "lilglocc1k",
    "Psykosngl", "ihysosa", "Lizzygemm", "KongoFuture", "lherealchieff",
    "lucidwaits", "laligafrauds", "UtdXclusive", "lmfaooooos", "unbasedsavage",
    "nolmtfights", "elsdawg", "UTDTrey", "ReddCinema", "feinmadeit",
    "jt0hny", "billyinpurple", "AkademiksTV", "korzawyd", "alkalineRMFC",
    "BenopaOnyx1", "views09", "MooreRMFC"
  ];

  // Helper function to block tweets based on the username
  const blockTweet = (tweet) => {
    // Log the current tweet being processed for debugging
    console.log(`Processing tweet node:`, tweet);

    // Look for the username by checking for an anchor tag inside the tweet
    const userElement = tweet.querySelector('a[href^="/"]'); // Look for anchor tag with href starting with "/"
    if (userElement) {
      const username = userElement.getAttribute('href').substring(1); // Extract the username (e.g., "/username" -> "username")
      console.log(`Found tweet from: ${username}`); // Debug log for username extraction

      // Check if this username is in the blocked list
      if (blockedAccounts.includes(username)) {
        console.log(`Blocking tweet from: ${username}`); // Debug log for blocked user
        tweet.style.display = "none"; // Hide the tweet by setting its display style to "none"
      } else {
        console.log(`Tweet from allowed user: ${username}`); // Debug log for allowed user
      }
    } else {
      console.log("No user element found for this tweet."); // Debug log if no user element is found
    }
  };

  // Observe for dynamically loaded tweets
  const observeTweets = (mutations) => {
    console.log("MutationObserver detected changes."); // Debug log for MutationObserver activity
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        // Log every node being processed
        console.log('Processing node:', node);

        // Check if the node is a tweet container (either an article or div with data-testid="tweet")
        if (node.nodeType === 1 && (node.tagName === 'ARTICLE' || node.matches('div[data-testid="tweet"]'))) {
          console.log("New tweet detected: ", node); // Debug log when a new tweet is detected
          blockTweet(node); // Block the tweet if necessary
        } else {
          console.log("Ignored a non-tweet node:", node); // Debug log when a non-tweet node is detected
        }
      });
    });
  };

  // Initial run: Block any tweets already present on the page
  console.log("Running initial blockTweets function."); // Debug log before running initial blocking
  const tweets = document.querySelectorAll('article[aria-labelledby], div[data-testid="tweet"]'); // Select articles and divs representing tweets
  console.log(`Found ${tweets.length} tweets initially.`); // Debug log to show how many tweets were found initially
  tweets.forEach(tweet => {
    console.log("Processing initial tweet:", tweet);
    blockTweet(tweet); // Block tweets initially found
  });

  // Set up MutationObserver to watch for new tweets dynamically loaded
  console.log("Setting up MutationObserver."); // Debug log when MutationObserver is set up
  const observer = new MutationObserver(observeTweets);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log("hideBlockedAccounts function initialized."); // Final debug log indicating that the function has started
}

// Run the script
console.log("Starting content script."); // Initial debug log when script starts
hideBlockedAccounts(); // Execute the hideBlockedAccounts function
