chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { cancel: true };
    },
    { urls: ["*://ads.twitter.com/*"] },
    ["blocking"]
  );