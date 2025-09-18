// popup.js
document.getElementById("pip-btn").addEventListener("click", () => {
  // Query for the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: true },
      function: reqPipMode,
    });
  });
});

function reqPipMode() {
  let videoElement = document.querySelector("#movie_player .html5-main-video");
  if (videoElement) {
    if (videoElement.hasAttribute("disablepictureinpicture"))
      videoElement.removeAttribute("disablepictureinpicture");
    videoElement.requestPictureInPicture();
  } else {
    videoElement = document.querySelector("video");
    if (videoElement.hasAttribute("disablepictureinpicture"))
      videoElement.removeAttribute("disablepictureinpicture");
    if (videoElement) {
      videoElement.requestPictureInPicture();
    }
    console.log("No video element found on this page.");
  }
}
