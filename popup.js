// popup.js
document.getElementById('pip-btn').addEventListener('click', () => {
    // Query for the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: addVideoId
        });
    });
});

function addVideoId() {
    console.log('Running addVideoId() function');
    const videoElement = document.querySelector("#movie_player .html5-main-video");
    if (videoElement) {
        videoElement.requestPictureInPicture()
        console.log('Video Element Found');
    } else {
        console.log('No video element found on this page.');
    }
}
