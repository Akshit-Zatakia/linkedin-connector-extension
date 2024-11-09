let isRunning = true;

async function sendConnectionRequests() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // find all the connect text button
  const connectButtons = Array.from(document.querySelectorAll("button")).filter(
    (button) => button.textContent.includes("Connect")
  );

  // loop over each button and send the connection request
  for (const button of connectButtons) {
    if (!isRunning) break;

    button.scrollIntoView();
    await delay(Math.random() * 5000 + 5000); // randomly wating for 5-10 sec

    button.click();
    await delay(1000);

    // for a popup which appears after clicking on connect button
    const sendButton = document.querySelector(
      "button[aria-label='Send without a note']"
    );
    if (sendButton) {
      sendButton.click();
    } else {
      console.warn(
        "Send button not found, possibly already sent or issue with popup."
      );
    }

    // updating the counter by 1
    chrome.runtime.sendMessage({ action: "updateCounter" });
  }
}

// if stop connecting button is pressed
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "stop") {
    isRunning = false;
  }
});

isRunning = true;
sendConnectionRequests();
