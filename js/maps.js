var centerCoord = {lat: 25.796645, lng: -80.126005}; // {lat: 39.7684, lng: -86.1581}; //{lat: 40.506977, lng: -73.886787},

function initMap() {
  var mapDiv = document.getElementById('map');
  var mapOptions = {
    center: centerCoord,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 18, // 11
    tilt: 45,
    draggable: false,
    //scrollwheel: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
      //mapTypeControl: true,
      //panControl: true,
      //rotateControl: true,
      //streetViewControl: true,
      //scaleControl: true,
      //zoomControl: true,
      //scrollwheel: true,
  };

  var map = new google.maps.Map(mapDiv, mapOptions);
  google.maps.event.trigger(map, "resize");
  map.setCenter(centerCoord); // Recenter when resized


  // Initialize Sizes
  var zoom = map.getZoom();
  var cloud = document.getElementsByClassName('cloud');
  var orbit = document.getElementsByClassName('orbit');
  for(var i = 0; i < cloud.length; i++) {
    cloud[i].style.width = (zoom / 22) * 245 + "px";
  }
  for(var i = 0; i < orbit.length; i++) {
    if(zoom < 10) {
      orbit[i].src = "images/satellite.png";
      orbit[i].style.width = (zoom / 22) * 500 + "px";
    } else {
      orbit[i].src = "images/plane.png";
      orbit[i].style.width = (zoom / 22) * 100 + "px";
    }
  }

  // Add Marker
  var marker = new google.maps.Marker({
    position: centerCoord,
    animation: google.maps.Animation.DROP,
    map: map,
    icon: {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 10
  },
    title: 'Hello World!'
  });

  // Adjust Tilt
  google.maps.event.addListener(map, 'tilt_changed', function() {
    // Add perspective if google maps can't do it for us
    if (map.getTilt() == 0) {
      mapDiv.className = "hasPerspective";
    } else { // Remove perspective when google maps can do it for us
      mapDiv.className = "flat";
      map.setHeading(0);
    }
    google.maps.event.trigger(map, "resize");
    map.setCenter(centerCoord); // Recenter when resized
  });

  // Adjust Zoom
  google.maps.event.addListener(map, 'zoom_changed', function() {
    var zoom = map.getZoom();
    var cloud = document.getElementsByClassName('cloud');
    var orbit = document.getElementsByClassName('orbit');
    for(var i = 0; i < cloud.length; i++) {
      cloud[i].style.width = (zoom / 22) * 245 + "px";
    }
    for(var i = 0; i < orbit.length; i++) {
      if(zoom < 10) {
        orbit[i].src = "images/satellite.png";
        orbit[i].style.width = (zoom / 22) * 500 + "px";
      } else {
        orbit[i].src = "images/plane.png";
        orbit[i].style.width = (zoom / 22) * 100 + "px";
      }
    }
    google.maps.event.trigger(map, "resize");
    map.setCenter(centerCoord); // Recenter when resized
  });

}
