// script.js
var w = 1024, h = 1024; // Dimensioni dell'immagine originale
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2, // Limita lo zoom out
    maxZoom: 2, // Limita lo zoom in
    maxBoundsViscosity: 1.0 // Limita lo scorrimento
});

var bounds = [[0,0], [h,w]];
var image = L.imageOverlay('https://github.com/TommyTommy10/hollow-knight/raw/main/Hallownest%20map.png', bounds).addTo(map);

map.fitBounds(bounds);
map.setMaxBounds(bounds);

// Aggiungi marker per alcune aree di Hallownest con popup personalizzati e immagini
var dirtmouth = L.marker([760, 220]).addTo(map)
    .bindPopup('<div class="custom-popup"><b>Dirtmouth</b><br>Il villaggio di partenza.<br><img src="URL_TO_IMAGE" width="200" /></div>')
    .openPopup();

var greenPath = L.marker([600, 350]).addTo(map)
    .bindPopup('<div class="custom-popup"><b>Greenpath</b><br>Un'area lussureggiante e verde.<br><img src="URL_TO_IMAGE" width="200" /></div>');

var cityOfTears = L.marker([400, 500]).addTo(map)
    .bindPopup('<div class="custom-popup"><b>City of Tears</b><br>La città capitale di Hallownest.<br><img src="URL_TO_IMAGE" width="200" /></div>');

var kingdomsEdge = L.marker([200, 700]).addTo(map)
    .bindPopup('<div class="custom-popup"><b>Kingdom\'s Edge</b><br>L'area più esterna e selvaggia.<br><img src="URL_TO_IMAGE" width="200" /></div>');

var theAbyss = L.marker([100, 900]).addTo(map)
    .bindPopup('<div class="custom-popup"><b>The Abyss</b><br>Un'area oscura e misteriosa.<br><img src="URL_TO_IMAGE" width="200" /></div>');
