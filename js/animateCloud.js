function moveClouds() {
  var cloud = document.getElementsByClassName('cloud');
  var disp = 0;
  var width = window.innerWidth;

  randPlaceCloud(cloud);

  // Start Animation
  if(cloud.length >= 1) {
    var id = setInterval(drift, 30);
  }

  function drift (){
    for(var i = 0; i < cloud.length; i++) {
      if (disp >= width * 1.5) {
          disp = -1.5 * width; // disp = 0?
      } else {
          disp++;
          cloud[i].style.transform = "translate(" + -1 * disp + "px, " +  .25 * disp + "px)";
      }
    }
  }

}

// Place the clouds
function placeCloud(cloud, top, left) {
  cloud.style.left = left;
  cloud.style.top = top;
}

// Place clouds randomly
function randPlaceCloud(cloud) {
  for(var i = 0; i < cloud.length; i++) {
    cloud[i].style.left = 100 * Math.random() + "%";
    cloud[i].style.top = 90 * Math.random() + "%";
  }
}
