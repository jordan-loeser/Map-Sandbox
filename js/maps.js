function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 40.506977, lng: -73.886787},
    tilt: 0,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    zoom: 10,
    draggable: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true
      //mapTypeControl: true,
      //panControl: true,
      //rotateControl: true,
      //streetViewControl: true,
      //scaleControl: true,
      //zoomControl: true,
      //scrollwheel: true,
  });
}
