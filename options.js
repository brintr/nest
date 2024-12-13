document.addEventListener("DOMContentLoaded", () => {
    console.log("Options page loaded");
  
    const blockAdsCheckbox = document.getElementById("block-ads");
    const blockStakeCheckbox = document.getElementById("block-stake");
    const blockCryptoCheckbox = document.getElementById("block-crypto");
  
    // Example: Load saved settings
    chrome.storage.sync.get(["blockAds", "blockStake", "blockCrypto"], (data) => {
      blockAdsCheckbox.checked = data.blockAds || false;
      blockStakeCheckbox.checked = data.blockStake || false;
      blockCryptoCheckbox.checked = data.blockCrypto || false;
    });
  
    // Example: Save settings
    blockAdsCheckbox.addEventListener("change", () => {
      chrome.storage.sync.set({ blockAds: blockAdsCheckbox.checked });
    });
    blockStakeCheckbox.addEventListener("change", () => {
      chrome.storage.sync.set({ blockStake: blockStakeCheckbox.checked });
    });
    blockCryptoCheckbox.addEventListener("change", () => {
      chrome.storage.sync.set({ blockCrypto: blockCryptoCheckbox.checked });
    });
  });
  