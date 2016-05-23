function moveOrbiter() {
  var orbit = document.getElementsByClassName('orbit');
  var dispX = 0;
  var dispY = 0;
  var width = window.innerWidth;

  placeRandomly(orbit);

  // Start Animation
  if(orbit.length >= 1) {
    var id = setInterval(fly, 30);
  }

  function fly() {
    for(var i = 0; i < orbit.length; i++) {
      if (dispX >= width * 1.5) {
          dispX = -1.5 * width; // Push the cloud past the container
          dispY = 1.5 * width;
      } else {
          dispX += .5;
          dispY -= .125;
          orbit[i].style.transform = "translate(" + dispX + "px, " + dispY + "px)";
      }
    }
  }

}

addLoadEvent(moveOrbiter);
