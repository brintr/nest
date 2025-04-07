document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const statusDiv = document.getElementById('status');

    // Load initial state
    chrome.storage.sync.get(['isEnabled'], function(result) {
        toggleSwitch.checked = result.isEnabled !== false; // Default to true if not set
        updateStatus(result.isEnabled !== false);
    });

    // Toggle switch handler
    toggleSwitch.addEventListener('change', function() {
        const isEnabled = toggleSwitch.checked;
        chrome.storage.sync.set({ isEnabled: isEnabled });
        updateStatus(isEnabled);
        
        // Send message to content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "toggle", isEnabled: isEnabled});
        });
    });

    function updateStatus(isEnabled) {
        statusDiv.textContent = isEnabled ? 'Blocking gambling ads' : 'Gambling ad blocking is disabled';
        statusDiv.className = 'status ' + (isEnabled ? 'active' : 'inactive');
    }
}); 