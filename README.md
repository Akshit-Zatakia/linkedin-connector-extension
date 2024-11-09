# LinkedIn Connector Chrome Extension

A just Chrome extension to automate sending LinkedIn connection requests.

## Features

- Automatically sends LinkedIn connection requests to visible profiles on the first page of search results.
- Includes a start/stop button for control.
- Displays a counter with a circular progress bar for tracking the number of connection requests sent.

## Installation

- Clone this repository to your local machine:

  ```bash
  git clone https://github.com/Akshit-Zatakia/linkedin-connector-extension.git
  ```

- Open Chrome and navigate to chrome://extensions/.

- Enable Developer mode in the top right corner.

- Click Load unpacked and select the folder where you cloned the repository.

- The extension should now appear in your list of extensions.

## Usage

- Go to LinkedIn and perform a search.
- Click the LinkedIn Connector extension icon in the toolbar to open the popup.

- Click Start Connecting to begin sending connection requests.
  The extension will:
  - Wait a random interval between 5-10 seconds between requests.
  - Automatically click "Send without a note" on the connection popup without adding a note.
  - The circular progress bar and counter will show the number of requests sent.
  - To stop sending requests, click Stop Connecting.
