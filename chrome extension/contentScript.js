// Sends a message to an event listener in background.js to redirect matched urls to the given url
chrome.runtime.sendMessage({redirect: "localhost:3000"}); 