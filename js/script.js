function initMap() {
  // location of marker
  var marker = {lat: 25.517258, lng: 50.871215};
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: marker, mapTypeId: 'satellite'
  });
  var marker = new google.maps.Marker({position: marker, map: map});
}