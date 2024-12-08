// popup.js
document.getElementById('pip-btn').addEventListener('click', () => {
    // Query for the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: reqPipMode
        });
    });
});

function reqPipMode() {
    const videoElement = document.querySelector("#movie_player .html5-main-video");
    if (videoElement) {
        videoElement.requestPictureInPicture()
    } else {
        console.log('No video element found on this page.');
    }
}
