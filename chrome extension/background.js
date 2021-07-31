// Listens for a message from contentScript.js and updates the url of the tab to redirect to provided url
chrome.runtime.onMessage.addListener(function(request, sender) {
    chrome.tabs.update(sender.tab.id, {url: request.redirect});
})