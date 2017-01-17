$('.form-rut').rut();
//$('#btn-login').preventDefault()

//LOG IN BCI
/*var request = require("request");
var rut = $('#rut').val();
var dv = $('#dv').val();
var password = $('#password').val()
var options = { method: 'POST',
  url: 'https://api.us.apiconnect.ibmcloud.com/hackaton-2016-produccion-master/api/cliente/login',
  headers: 
   { rut: body.rut,
     accept: 'application/json',
     'content-type': 'application/json' },
  body: { rut: rut, dv: dv, password: password },
  json: true };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});

//RECUPERAR DATOS PRODUCTOS DE CLIENTE
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.us.apiconnect.ibmcloud.com/hackaton-2016-produccion-master/api/cliente/cuentas',
  headers: 
   { rut: rut,
     accept: 'application/json',
     'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});*/
//Mapa Cajeros
var map;
var infowindow;

function initMap() {
  var ifBlanco = {lat: -33.419000, lng: -70.641731};

  map = new google.maps.Map(document.getElementById('map'), {
    center: ifBlanco,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: pos,
        radius: 5000,
        types: ['atm']
      }, callback);
      new google.maps.InfoWindow().setPosition(pos);
      new google.maps.InfoWindow().setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());

    }

    
  }
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow2 = new google.maps.InfoWindow();


      infowindow2.setContent(place.name);
      infowindow2.open(map, this);
    });
  }