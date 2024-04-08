function playVideo(videoPath) {
    var videoElement = document.getElementById("videoPlayer");
    videoElement.src = videoPath;
    videoElement.style.display = "block";
  }

document.addEventListener('DOMContentLoaded', function() {
  const PageContentElement = document.querySelector('.page-content');
  const pageContainer = document.querySelector('.page-container');
  
  if (!PageContentElement) {
      pageContainer.style.minHeight = 'calc(100vh - 82px)';
  }
  });