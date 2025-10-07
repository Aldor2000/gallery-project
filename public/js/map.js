
//Initialize the map
-17.783287112731056, -63.18206792303496
let map =L.map('map').setView([-17.783, -63.182], 13);

//Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
 
//Add a marker, circle, and polygon to the map
let marker= L.marker([-17.778, -63.154]).addTo(map);

let circle = L.circle([-17.740, -63.14], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


let polygon = L.polygon([
    [-17.752, -63.202],
    [-17.750, -63.195],
    [-17.759, -63.192],
    [-17.759, -63.199]
]).addTo(map);


//Add popups to the marker, circle, and polygon
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

//Add a standalone popup to the map
var popup = L.popup()
    .setLatLng([-17.783, -63.182])
    .setContent("I am a standalone popup.")
    .openOn(map);


//Add a click event to the map
    function onMapClick(e) {
     popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}



map.on('click', onMapClick);