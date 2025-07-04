// built by Theo Maurino in 2025
// toggle logic fool

const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");

// load saved state frm chrome
chrome.storage.sync.get(['isEnabled'], (result) => {
    const isEnabled = result.isEnabled !== false;
    toggle.checked = isEnabled;
    statusText.textContent = isEnabled ? "ACTIVE. Blocking AI." : "DISABLED.";

});

toggle.addEventListener('change', () => {
    const isEnabled = toggle.checked;
    chrome.storage.sync.set({isEnabled});

    // update UI
    statusText.textContent = isEnabled ? "ACTIVE. Blocking AI." : "DISABLED.";

    chrome.runtime.sendMessage({action : 'updateRules', isEnabled});
})