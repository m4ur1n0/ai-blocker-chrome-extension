// built by Theo Maurino in 2025
// toggle logic fool

const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");
const toggleContainer = document.querySelector('.toggle-container');


// load saved state frm chrome
chrome.storage.sync.get(['isEnabled'], (result) => {
    const isEnabled = result.isEnabled !== false;
    toggle.checked = isEnabled;
    updateUI(isEnabled);

});

toggle.addEventListener('change', () => {
    const isEnabled = toggle.checked;
    chrome.storage.sync.set({isEnabled});

    // update UI
    updateUI(isEnabled);

    chrome.runtime.sendMessage({action : 'updateRules', isEnabled});
})

function updateUI(isEnabled) {
    statusText.textContent = isEnabled ? "ACTIVE. Blocking AI." : "DISABLED.";
    
    // Update border color
    toggleContainer.classList.toggle('blocking', isEnabled);
    toggleContainer.classList.toggle('not-blocking', !isEnabled);
  }