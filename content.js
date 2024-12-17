function hideBlockedAccounts() {
  const blockedAccounts = [
"ineedrare", "realcrazyclip", "LeDauof", "CFCdennoh", "CFCms3",
    "saintmufc", "TheWavyRed", "FCBLamine", "CFCLavia", "PaamanuelUtd",
    "cfcpriiest", "CFCKen", "LSPN_FC", "FootbalIhub", "AFC_Jerry",
    "Utdjacobi", "fodenempire", "WORLDOFCLIPS", "willclapyogirl",
    "Fightsbro", "jazziewontmiss", "justlifeinnit", "killkodak", "livitsIvy",
    "CFCCarneyy", "ystrayz", "N3onHQ", "ryohzzz", "vinhlegacy", "AdxmAFC",
    "DestUTD", "FightMaster", "picsthatg0hard", "cagiago", "bestfights_ko",
    "hoodcrazy", "fuckstake", "Vigoz_909", "AlbicelesteTalk", "AmorimEra",
    "ihybeto", "DahiannaXo", "Clipper1", "wilddiscord", "lilglocc1k",
    "Psykosngl", "ihysosa", "Lizzygemm", "KongoFuture", "lherealchieff",
    "lucidwaits", "laligafrauds", "UtdXclusive", "lmfaooooos", "unbasedsavage",
    "nolmtfights", "elsdawg", "UTDTrey", "ReddCinema", "feinmadeit",
    "jt0hny", "billyinpurple", "AkademiksTV", "korzawyd", "alkalineRMFC",
    "BenopaOnyx1", "views09", "MooreRMFC", "WORLDOFCLIPZ", "ItsKingSlime",
     "LeDauof", "AtlanticMUFC", "Fights_bro", "luvitsIvy", "FightMaster__", 
     "cagiago", "bestfights_ko", "hoodcrazy", "lovestakee", "kipperoffone", 
     "Clipper1", "INTERIORPORN1", "FaZe_HQ", "divinecoup", "willnotclap", "cy1nus", 
     "thelampardview", "Pitch__Report", "LFC_Liam66", "4everrthumbin", "cctvcorner",
     "titancrib", "neveryen", "FazeBanksUpdate", "SarcasticFactos", "KillaKrew", "StreamersEra",
     "NS_N_B", "PercThaGoat", "xiralzzz", "rainbetcom", "Exorenon", "he1kumwya", "FCBSpooky",
     "TrollPenaldo", "yzstrayz",  "MessiFCWorld", "TheWavyRed", "FCBArgentine", "ktp_fcb",
     "streamHOF", "footbalhouse", "AdinRossEmpire", "AddictiveMedia", "1secantes", "keemwontmiss",
     "Rockoldcfc", "noddlelamine", "BantersExtra", "shmunkkk", "Vullety", "y2khunter", "ihategooning",
     "UTDDereck", "BestFightClip", "destroynectar", "FCBLamine", "cagiago", "Nkwameeee", "SK10Football",
     "TheAminFCB2", "kick_clips", "AdinReports", "wealth_united", "SpeedUpdates1", "TateNews", "desxxy",
     "scubaryan", "TrollFutballl", "rariib", "fcbharrison", "AdinRossVods", "StakeUsa", "MCFC_Jacky",
     "Rice_Prop", "CFC_Jamty", "HistoricHub", "Vigoz_909", "cfcpriiest", "ragna1x", "EzzyUTD",
     "kipperoffone", "fwj6y", "Leo_messii_8", "LFCGeezy", "AdithyaReddy_20", "lfc_fede", "Psykosngl",
     "BicoTravis", "KillaMinga", "Shadygize", "KongoFuture", "lagilafrauds", "Bigqadi",
     "notmtfights", "ThreadTImeline", "Khalerh", "UtdEIIis", "P2zzy", "TheMarescaEra", "sp5dersflaw", "Stake",
     "hourlyFox", "slqttyo", "clippedszn", "WeAreMessi", "flvckojamie", "tj0hny", "Santy03" 
  ];

  //Stuff for options 
      // Example function to simulate checking for blocked accounts
      let blockedStakeAccounts = 0;  // This variable will hold the number of detected blocked accounts

      // Simulate a function that checks for Stake accounts and updates the status
      function checkStakeAccounts() {
        // Here, you would replace this with actual logic to detect blocked Stake accounts
        // For this example, we are simulating detecting blocked accounts.
        
        // Simulate the detection of blocked accounts
        blockedStakeAccounts = 3;  // Replace this with the actual logic of detecting blocked accounts
  
        // Now update the status based on the number of blocked accounts
        if (blockedStakeAccounts > 0) {
          document.getElementById("stake-status-text").innerText = `(${blockedStakeAccounts} detected)`;
        } else {
          document.getElementById("stake-status-text").innerText = "Checking...";  // Default message if no accounts detected
        }
      }
  
      // Call the function to simulate the account check when the page loads
      window.onload = checkStakeAccounts;


  // Helper function to block elements
  function blockElement(element, reason) {
    console.log(`Blocking ${reason}:`, element);
    element.style.display = "none"; // Hide the element
  }

  // Block tweets from specific users
  const blockTweet = (tweet) => {
    const userElement = tweet.querySelector('a[href^="/"]');
    if (userElement) {
      const username = userElement.getAttribute('href').substring(1);
      if (blockedAccounts.includes(username)) {
        blockElement(tweet, `tweet from ${username}`);
      }
    }
  };

  // Block ads based on the "Ad" label
  const blockAd = (container) => {
    const adLabel = container.querySelector('span');
    if (adLabel && adLabel.textContent.trim() === "Ad") {
      blockElement(container, "sponsored ad");
    }
  };

  // Process all containers (tweets and ads)
  const processContainers = () => {
    const containers = document.querySelectorAll('div[data-testid="cellInnerDiv"]');
    containers.forEach(container => {
      // Check for tweets
      const tweet = container.querySelector('article[aria-labelledby]');
      if (tweet) {
        blockTweet(tweet);
      }
      // Check for ads
      blockAd(container);
    });
  };

  // Observe DOM changes
  const observeChanges = (mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.matches('div[data-testid="cellInnerDiv"]')) {
          // Process newly added containers
          const tweet = node.querySelector('article[aria-labelledby]');
          if (tweet) {
            blockTweet(tweet);
          }
          blockAd(node);
        }
      });
    });
  };

  // Initial processing of existing tweets and ads
  processContainers();

  // Set up a MutationObserver to watch for new tweets and ads
  const observer = new MutationObserver(observeChanges);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log("hideBlockedAccounts function initialized.");
}

// Run the script
console.log("Starting content script.");
hideBlockedAccounts();





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

