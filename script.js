// script.js
var map = L.map('map').setView([0, 0], 2); // Coordinata base e livello di zoom

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

// Aggiungi marker per alcune aree di Hallownest con icone personalizzate
var greenPathIcon = L.icon({
    iconUrl: 'path_to_greenpath_icon.png', // Sostituisci con l'URL dell'icona personalizzata
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

var greenPath = L.marker([51.5, -0.09], {icon: greenPathIcon}).addTo(map)
    .bindPopup('Greenpath')
    .openPopup();

var cityOfTearsIcon = L.icon({
    iconUrl: 'path_to_cityoftears_icon.png', // Sostituisci con l'URL dell'icona personalizzata
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

var cityOfTears = L.marker([51.495, -0.083], {icon: cityOfTearsIcon}).addTo(map)
    .bindPopup('City of Tears');

var crystalPeakIcon = L.icon({
    iconUrl: 'path_to_crystalpeak_icon.png', // Sostituisci con l'URL dell'icona personalizzata
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

var crystalPeak = L.marker([51.49, -0.1], {icon: crystalPeakIcon}).addTo(map)
    .bindPopup('Crystal Peak');
