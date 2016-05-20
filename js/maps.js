var centerCoord = {lat: 39.7684, lng: -86.1581};

function initMap() {
  var mapDiv = document.getElementById('map');
  var mapOptions = {
    center: centerCoord, //{lat: 40.506977, lng: -73.886787},
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 11,
    tilt: 45,
    draggable: false,
    scrollwheel: false,
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

  google.maps.event.addListener(map, 'tilt_changed', function() {
    // Add perspective if google maps can't do it for us
    if (map.getTilt() == 0) {
      mapDiv.className = "hasPerspective";
    } else { // Remove perspective when google maps can do it for us
      mapDiv.className = "";
      map.setHeading(45);
    }
    google.maps.event.trigger(map, "resize");
    map.setCenter(centerCoord);
  });

}
