// script.js
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('https://github.com/TommyTommy10/hollow-knight/raw/main/Hallownest%20map.png', bounds).addTo(map);

map.fitBounds(bounds);

// Aggiungi marker per le aree di Hallownest
var dirtmouth = L.marker([220, 760]).addTo(map)
    .bindPopup('Dirtmouth')
    .openPopup();

var greenPath = L.marker([350, 600]).addTo(map)
    .bindPopup('Greenpath');

var cityOfTears = L.marker([500, 400]).addTo(map)
    .bindPopup('City of Tears');

var kingdomsEdge = L.marker([700, 200]).addTo(map)
    .bindPopup("Kingdom's Edge");

var theAbyss = L.marker([900, 100]).addTo(map)
    .bindPopup('The Abyss');
