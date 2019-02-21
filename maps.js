// Based on the class example.

// Array with latitude and longitude 
let mapAreaCenterCoordinates = [39, -100]

// Create the map 
let map = L.map('bridges-map').setView(mapAreaCenterCoordinates, 4)

var bridgeIcon = L.icon({
  iconUrl: 'bridge.png',
  iconSize:    [64, 64],
  iconAnchor:  [32, 32],
  popupAnchor: [0,0]
});

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3,
    maxZoom: 8,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWF0dGhld2N1cnJhbiIsImEiOiJjanM1YXhramswZHcxNDRueWcwYWxuZmtpIn0.z3GWbZ3PKqAFJxOpBEHWlg'
}).addTo(map)


// Add some markers 
let VerrazanoCoordinates = [40.6066, -74.0447]
let VerrazanoMarker = L.marker(VerrazanoCoordinates, {icon: bridgeIcon})
    .bindPopup("Verrazano-Narrows Bridge<br><a href='http://bridge.aalto.fi/en/longspan.html'>Length: 1298.4 meters</a>")
    .addTo(map)

let GoldenGateCoordinates = [37.8199, -122.4783]
let GoldenGateMarker = L.marker(GoldenGateCoordinates, {icon: bridgeIcon})
    .bindPopup("Golden Gate Bridge<br><a href='http://bridge.aalto.fi/en/longspan.html'>Length: 1280.2 meters</a>")
    .addTo(map)

let MackinacCoordinates = [45.8174, -84.7278]
let MackinacMarker = L.marker(MackinacCoordinates, {icon: bridgeIcon})
    .bindPopup("Mackinac Bridge<br><a href='http://bridge.aalto.fi/en/longspan.html'>Length: 1158.0 meters</a>")
    .addTo(map)

let GeorgeWashingtonCoordinates = [40.8517, -73.9527]
let GeorgeWashingtonMarker = L.marker(GeorgeWashingtonCoordinates, {icon: bridgeIcon})
    .bindPopup("George Washington Bridge<br>Length: 1067.0 meters")
    .addTo(map)

let TacomaCoordinates = [47.2690, -122.5517]
let TacomaMarker = L.marker(TacomaCoordinates, {icon: bridgeIcon})
    .bindPopup("Tacoma Narrows Bridge<br>Length: 853.4 meters")
    .addTo(map)

// Add a circle 
var multipleBridgesCircle = L.circle(GeorgeWashingtonCoordinates, {
        color: 'green',  
        radius: 300000,
        fillOpacity: 0.2
    })
    .bindPopup("Multiple (2) Long Bridges")
    .addTo(map)