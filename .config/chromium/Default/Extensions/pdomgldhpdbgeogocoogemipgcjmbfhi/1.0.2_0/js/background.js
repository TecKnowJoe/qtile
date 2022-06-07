// Build the Zapmark URL and go!
chrome.omnibox.onInputEntered.addListener(function(keyword) {
    chrome.storage.sync.get(['apiToken'], function(result) {

        // Build the URL
        if (result.apiToken) {
            var zapmarkUrl = 'https://zapmarks.io/u/' + encodeURIComponent(keyword) + '?api_token=' + result.apiToken;
        } else {
            var zapmarkUrl = 'https://zapmarks.io/u/' + encodeURIComponent(keyword);
        }

        // Launch the Zapmark
        chrome.tabs.update({ url: zapmarkUrl });

    });
});
