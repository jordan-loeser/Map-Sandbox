function moveClouds() {
  var cloud = document.getElementsByClassName('cloud');
  var disp = 0;
  var width = window.innerWidth;

  // Place the clouds

  placeCloud(cloud[0], "50%", "50%");
  placeCloud(cloud[1], "70%", "20%");
  

  // Start Animation
  var id = setInterval(drift, 50);

  function drift (){
    var i;
    for(i = 0; i < cloud.length; i++) {
      if (disp >= width) {
          disp = -1000; // disp = 0?
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
/*
function randPlaceCloud(cloud) {
  cloud.style.left = 100 * Math.random() + "%";
  cloud.style.top = 100 * Math.random() + "%";
}
*/
