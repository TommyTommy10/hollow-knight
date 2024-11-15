// script.js
var w = 1024, h = 1024; // Dimensioni dell'immagine originale
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    maxZoom: 2, // Limita lo zoom
    maxBoundsViscosity: 1.0 // Limita lo scorrimento
});

var bounds = [[0,0], [h,w]];
var image = L.imageOverlay('https://github.com/TommyTommy10/hollow-knight/raw/main/Hallownest%20map.png', bounds).addTo(map);

map.fitBounds(bounds);
map.setMaxBounds(bounds);

// Aggiungi marker per alcune aree di Hallownest con popup personalizzati
var dirtmouth = L.marker([760, 220]).addTo(map)
    .bindPopup('<div class="custom-popup">Dirtmouth</div>')
    .openPopup();

var greenPath = L.marker([600, 350]).addTo(map)
    .bindPopup('<div class="custom-popup">Greenpath</div>');

var cityOfTears = L.marker([400, 500]).addTo(map)
    .bindPopup('<div class="custom-popup">City of Tears</div>');

var kingdomsEdge = L.marker([200, 700]).addTo(map)
    .bindPopup('<div class="custom-popup">Kingdom\'s Edge</div>');

var theAbyss = L.marker([100, 900]).addTo(map)
    .bindPopup('<div class="custom-popup">The Abyss</div>');
