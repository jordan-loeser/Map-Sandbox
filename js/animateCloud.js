function moveClouds() {
  var cloud = document.getElementsByClassName('cloud');
  var dispX = 0;
  var dispY = 0;
  var width = window.innerWidth;

  placeRandomly(cloud);

  // Start Animation
  if(cloud.length >= 1) {
    var id = setInterval(drift, 80);
  }

  function drift (){
    for(var i = 0; i < cloud.length; i++) {
      if (dispX >= width * 1.5) {
          dispX = 1.5 * width; // Push the cloud past the container
          dispY = -1.5 * width;
      } else {
          dispX -= .25;
          dispY += .0625;
          cloud[i].style.transform = "translate(" + dispX + "px, " + dispY + "px)";
      }
    }
  }

}

// Place the clouds
function place(cloud, top, left) {
  cloud.style.left = left;
  cloud.style.top = top;
}

// Place clouds randomly
function placeRandomly(objects) {
  for(var i = 0; i < objects.length; i++) {
    objects[i].style.left = 100 * Math.random() + "%";
    objects[i].style.top = 90 * Math.random() + "%";
  }
}

addLoadEvent(moveClouds);
