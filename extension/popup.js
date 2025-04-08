document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const statusDiv = document.getElementById('status');
    const counterDiv = document.getElementById('counter');

    // Load initial state
    chrome.storage.sync.get(['isEnabled', 'adsRemoved'], function(result) {
        const isEnabled = result.isEnabled !== false; // Default to true if not set
        const adsRemoved = result.adsRemoved || 0;
        
        toggleSwitch.checked = isEnabled;
        updateStatus(isEnabled);
        updateCounter(adsRemoved);
    });

    // Toggle switch handler
    toggleSwitch.addEventListener('change', function() {
        const isEnabled = toggleSwitch.checked;
        chrome.storage.sync.set({ isEnabled: isEnabled });
        updateStatus(isEnabled);
        
        // Send message to content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "toggle", isEnabled: isEnabled});
            }
        });
    });

    function updateStatus(isEnabled) {
        if (!isEnabled) {
            statusDiv.textContent = 'Gambling ad blocking is disabled';
            statusDiv.style.backgroundColor = '#fecdd3';
        } else {
            statusDiv.textContent = 'Checking for ads...';
            statusDiv.style.backgroundColor = '#fff1f2';
        }
    }

    function updateCounter(count) {
        const displayCount = count >= 1000 ? '1000+' : count;
        counterDiv.textContent = `Ads Removed: ${displayCount}`;
    }

    // Listen for messages from content script
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "updateCounter") {
            chrome.storage.sync.get(['adsRemoved'], function(result) {
                const newCount = (result.adsRemoved || 0) + 1;
                chrome.storage.sync.set({ adsRemoved: newCount });
                updateCounter(newCount);
            });
        }
    });
}); 