function playVideo(videoPath) {
    var videoElement = document.getElementById("videoPlayer");
    videoElement.src = videoPath;
    videoElement.style.display = "block";
  }