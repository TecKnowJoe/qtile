// Saves options to chrome.storage
function save_token() {
    var apiToken = document.getElementById('api_token').value;
    chrome.storage.sync.set({
        apiToken: apiToken
    }, function() {
        $("#saved").fadeTo("fast", 1).delay(2000).fadeTo("slow", 0);
    })
}

// Load API Token using the value stored in chrome storage.
function restore_token() {
    chrome.storage.sync.get({
        apiToken: ''
    }, function(items) {
        document.getElementById('api_token').value = items.apiToken;
    });
}

$("#save").submit(function(e) {
    e.preventDefault();
    save_token();
});

$(function() {
    restore_token();
});
