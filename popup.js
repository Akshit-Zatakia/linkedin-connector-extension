const toggleButton = document.getElementById("toggleButton");
const connectionCounter = document.getElementById("connectionCounter");
const progressCircle = document.getElementById("progressCircle");

let isConnecting = false;
let connectionCount = 0;
let totalConnections = 50;

// having toggle btn for start and stop
toggleButton.addEventListener("click", async () => {
  if (!isConnecting) {
    isConnecting = true;
    toggleButton.textContent = "Stop Connecting";

    connectionCount = 0;
    updateProgressBar(0);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      });
    });
  } else {
    isConnecting = false;
    toggleButton.textContent = "Start Connecting";

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "stop" });
    });
  }
});

function updateProgressBar(count) {
  let progress = Math.min((count / totalConnections) * 100, 100);
  connectionCounter.textContent = count;
  progressCircle.style.setProperty("--progress", progress);
}

// this will be called from content.js file
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateCounter" && isConnecting) {
    connectionCount++;
    updateProgressBar(connectionCount);

    if (connectionCount >= totalConnections) {
      toggleButton.click();
    }
  }
});
