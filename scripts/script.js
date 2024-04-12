function playVideo(videoPath) {
    var videoElement = document.getElementById("videoPlayer");
    videoElement.src = videoPath;
    videoElement.style.display = "block";
  }

document.addEventListener('DOMContentLoaded', function() {
  const PageContentElement = document.querySelector('.page-content');
  const PageContainer = document.querySelector('.page-container');
  const PageTitle = document.querySelector('.page-title');
  
  if (!PageContentElement && !PageTitle) {
      PageContainer.style.minHeight = 'calc(100vh - 82px)';
  }
})

function clickMenu(){
  if (itens.style.display == 'block'){
    itens.style.display = 'none'
  }
  else{
    itens.style.display = 'block'
  }
}