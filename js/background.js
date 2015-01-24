chrome.runtime.onMessage.addListener(function(request) {
    if (request.method == 'postUrl') {
        var worker = new Worker(chrome.runtime.getURL('js/worker.js')); // new Worker('js/worker.js');
        worker.postMessage(request.url);
    }
});