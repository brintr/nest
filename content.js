function hideBlockedAccounts() {
  const blockedAccounts = [
"ineedrare", "realcrazyclip", "LeDauof_", "CFCdennoh", "CFCms3",
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
     "Clipper1", "INTERIORPORN1", "FaZe_HQ", "divinecoup", "willnotclap", 
     "thelampardview", "cy1nus",  "Pitch__Report", "LFC_Liam66", "4everrthumbin",
     "titancrib", "neveryen", "FazeBanksUpdate", "SarcasticFactos", "KillaKrew", 
     "StreamersEra", "FCBSpooky", "FCBArgentine", "ktp_fcb", "keemwontmiss", 
    "ihategooning", "SK10Football", "TateNews", "desxxy", "MCFC_Jacky", "EzzyUTD",
     "NS_N_B", "PercThaGoat", "xiralzzz", "rainbetcom", "Exorenon", "he1kumwya", 
     "TrollPenaldo", "cctvcorner", "yzstrayz",  "MessiFCWorld", "TheWavyRed", 
     "streamHOF", "footbalhouse", "AdinRossEmpire", "AddictiveMedia", "1secantes", 
     "Rockoldcfc", "noddlelamine", "BantersExtra", "shmunkkk", "Vullety", "y2khunter", 
     "UTDDereck", "BestFightClip", "destroynectar", "FCBLamine", "cagiago", "Nkwameeee",
     "TheAminFCB2", "kick_clips", "AdinReports", "wealth_united", "SpeedUpdates1", 
     "scubaryan", "TrollFutballl", "rariib", "fcbharrison", "AdinRossVods", "StakeUsa", 
     "Rice_Prop", "CFC_Jamty", "HistoricHub", "Vigoz_909", "cfcpriiest", "ragna1x", 
     "kipperoffone", "fwj6y", "Leo_messii_8", "LFCGeezy", "AdithyaReddy_20", "lfc_fede", 
     "Psykosngl", "sp5dersflaw", "Stake", "Bigqadi", "flvckojamie", "tj0hny",
     "BicoTravis", "KillaMinga", "Shadygize", "KongoFuture", "lagilafrauds", 
     "notmtfights", "ThreadTImeline", "Khalerh", "UtdEIIis", "P2zzy", "TheMarescaEra", 
     "hourlyFox", "slqttyo", "clippedszn", "WeAreMessi", "Santy03", "AmorimEra_", "Den_UTD",
     "crazyfvideos_", "imagesthatgohrd", "Cfc_optaseun", "CFC_Carneyy", "hoodcrazy_", "Fight_Master__",
     "best_fights_ko", "_abochie", "cagiago_", "TheRSALad", "Atlantic_MUFC", "utdcoxy", "Cfc_optaseun",
     "UtdBloke_", "CFCHana_", "sheilairenenarh", "aintbychanzz", "NoodleHairCR7", "ssstingbaee", "4everrthumbin",
     "DJ_Scooby", "railedbygoyard", "rarriib", "bbyscar18", "_BambiDoe", "katianakayy", "lildedjanet", "lyssaxv",
     "moxieonx", "khanstillday", "savnnhx", "brutalfightz", "queenbrii69", "Lavagrlx", "Lavaaxgrl", "Lavaagrlx",
     "kaitvioletxo", "aylinxperez", "cyberlunax", "lavaxgrl", "saloxmelons", "bvchfvce", "AlexMonahan100",
     "t7yuta", "worstclips", "rainbetcom", "2AM_Esports", "JohnRainbet", "777Silvio777", "cobainzanerain",
     "RainbetSupport", "Arsenal_Chizzy", "dennizzer_k", "Cleverlydey4u", "CFC_OBED", "CFC_RaZer2", "Kaypoisson1", 
     "Ruf_ayi", "akokc_davido", "ellyserwaaa", "0panaa_1", "kvng_baff", "MaameAmaAdoma", "stylyrr", "serwaa_wifey", 
     "_khendrick", "unrulyking00", "unrulyking100", "Ghana_Ronaldo", "utdkobi", "AngiePosh5", "Kayjnr10", "I_Am_Winter", 
     "huncho_wontmiss", "CFCKen_", "the_berneese_", "_wildclips", "freakouts4u", "CR7Brasil", "Kylian", "hourlypawz", 
     "hourlyaura", "Alph_Utd", "prett_Nanie", "effizzzyy", "Khanstillday", "attah_akor", "anthonystilldey", "abazwhyllzz", 
     "Abazzbackup", "BoazFCB", "davidchibuike_", "Queen_Aeesha"
  ];


  //Promoted ad blocking 
  var adsHidden = 0;
 var adSelector = "div[data-testid=placementTracking]";
 var trendSelector = "div[data-testid=trend]";
 var userSelector = "div[data-testid=UserCell]";
 var articleSelector = "article[data-testid=tweet]";

 var sponsoredSvgPath = 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z';
 var sponsoredBySvgPath = 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z';
 var youMightLikeSvgPath = 'M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z';
 var adsSvgPath = 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z';
 var peopleFollowSvgPath = 'M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z';
 var xAd = '>Ad<'; // TODO: add more languages; appears to only be used for English accounts as of 2023-08-03
 var removePeopleToFollow = false; // set to 'true' if you want these suggestions removed, however note this also deletes some tweet replies
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
    } else if (removePeopleToFollow && el.innerHTML.includes(peopleFollowSvgPath)) {
      filteredAd = el;
    } else if (el.innerHTML.includes(xAd)) {
      filteredAd = el;
    } else if (promotedTweetTextSet.has(el.innerText)) { // TODO: bring back multi-lingual support from git history
      filteredAd = el;
    }

    return filteredAd;
  })
 }

 function hideAd(ad) {
  if (ad.closest(adSelector) !== null) { // Promoted tweets
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

