// script.js
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('path/to/hallownest_map.png', bounds).addTo(map);

map.fitBounds(bounds);

// Aggiungi marker per alcune aree di Hallownest
var greenPath = L.marker([400, 200]).addTo(map)
    .bindPopup('Greenpath')
    .openPopup();

var cityOfTears = L.marker([600, 500]).addTo(map)
    .bindPopup('City of Tears');

var crystalPeak = L.marker([300, 700]).addTo(map)
    .bindPopup('Crystal Peak');
