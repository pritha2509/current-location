latitude, longitude, destination;

$(document).ready(function () {
    alert("please allow the device to know your location");
    initGeolocation();
})

function initGeolocation (){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else{
        alert("sorry your browser does not support feolocation services !";)
    }
}

$(function)(){
    $(:#navigate-button).click(function () {
        window.location.href = ``
    })
}

function success(position) {
    console.log (position);
}

$(document).ready(function () {
    alert("please allow your device to know your location")
    initGeolocation();
})

function success(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
} 

mapboxgl.accessToken = 
var map = new mapboxgl.Map ({
    container : 'map',
    style: '',
    center: [longitude, latitude],
    zoom: 16
});

map.addControl (
    new MapBoxGeocoder ({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }).on('result', function (e) {
        destination = e.result.center
    })
);

$(function () {
    $("#navigate-button").click(function (){
        window.location.href = `ar_weather.html?soirce=${latitude};${longitude}&destination = ${destination[1]};${destination[0]}`
    })
})