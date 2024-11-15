// script.js
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var w = 1000, h = 1000; // Dimensioni originali dell'immagine
var url = 'https://github.com/TommyTommy10/hollow-knight/raw/main/Hallownest%20map.png';
var bounds = [[0,0], [h,w]];

var image = L.imageOverlay(url, bounds).addTo(map);

map.setMaxBounds(bounds);
map.fitBounds(bounds);

// Aggiungi marker per alcune aree di Hallownest
var dirtmouth = L.marker([760, 220]).addTo(map)
    .bindPopup('Dirtmouth')
    .openPopup();

var greenPath = L.marker([600, 350]).addTo(map)
    .bindPopup('Greenpath');

var cityOfTears = L.marker([400, 500]).addTo(map)
    .bindPopup('City of Tears');

var kingdomsEdge = L.marker([200, 700]).addTo(map)
    .bindPopup("Kingdom's Edge");

var theAbyss = L.marker([100, 900]).addTo(map)
    .bindPopup('The Abyss');
