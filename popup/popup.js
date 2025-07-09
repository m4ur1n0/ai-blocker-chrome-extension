// built by Theo Maurino in 2025
// toggle logic fool

const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");
const toggleContainer = document.querySelector('.toggle-container');

console.log("EXISTING");


// load saved state frm chrome
chrome.storage.sync.get(['isEnabled'], (result) => {
    const isEnabled = result.isEnabled !== false;
    // toggle.checked = isEnabled;
    updateUI(isEnabled);

});

toggle.addEventListener('click', () => {
    // console.log("CLICK");
    // let isEnabled = (chrome.storage.sync.get(['isEnabled'], (result) => {return result.isEnabled}));
    // console.log("STATE : ", !isEnabled);
    // isEnabled = !isEnabled;
    // console.log("STATE : ", !isEnabled);

    // chrome.storage.sync.set({isEnabled});

    // // update UI
    // updateUI(isEnabled);

    // chrome.runtime.sendMessage({action : 'updateRules', isEnabled});


    chrome.storage.sync.get(['isEnabled'], (result) => {
        const isEnabled = result.isEnabled !== false; // i'm being inefficient
        const newState = !isEnabled;
        // console.log(`WAS : ${isEnabled} -- NOW : ${newState}`);

        chrome.storage.sync.set({"isEnabled" : newState})
        updateUI(newState);
        chrome.runtime.sendMessage({action : 'updateRules', "isEnabled" : newState});

    })
})

function updateUI(isEnabled) {
    statusText.textContent = isEnabled ? "ACTIVE. Blocking AI." : "DISABLED.";
    
    // Update border color
    toggleContainer.classList.toggle('blocking', isEnabled);
    toggleContainer.classList.toggle('not-blocking', !isEnabled);
  }