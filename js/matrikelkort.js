/*
Copyright 2014, Frederiksberg Kommune - att. Hasse Huch and Niels Kjøller Hansen

This file is part of "Historiske-matrikelkort-webgis".
"Historiske-matrikelkort-webgis" is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
"Historiske-matrikelkort-webgis" is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with "Historiske-matrikelkort-webgis". If not, see <http://www.gnu.org/licenses/>.
 */
 
 /*global L, lag*/
var map = L.mapbox.map('map', {
    maxZoom: 20
});

// tilføj logo til kortet

var logo = L.control({position: 'bottomleft'});
        logo.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'logo');
            div.innerHTML += '<p><img src="img/frb_logo.png" /></p>';
            return div;
        };
        logo.addTo(map);
		

/* mapBuffer er antal af grader som et matrikelkort skal overlappe
   kortvisningen før det dukker op i lag-listen. Graderne er defineret
   ved zoom-niveau 18, og bliver skaleret op og ned så det passer. */
var mapBuffer = 0.003

var hash = L.hash(map);

L.control.fullscreen().addTo(map);

/*************************************************
 * https://github.com/runetvilum/Leaflet-geokeys *
 *************************************************/
L.geokeys.matrikelnr({
    placeholder: 'Søg matrikel',
    //keepOpen: true
}, {
    login: 'runetvilum',
    password: 'rutv2327'
}).addTo(map);


var graymap = L.mapbox.tileLayer('examples.map-20v6611k').addTo(map);
map.setView([55.683, 12.535], 14);
var overlays = [];
var baseLayers = {
    'Grundkort': graymap
};

var layersControl = new L.Control.Layers(baseLayers, {}, {
    collapsed: false,
    autoZIndex: false
}).addTo(map);

function addOverlay(overlay) {
    var zoom = map.getZoom();
    var bounds = map.getBounds();
    if (overlay.tileJSON.maxzoom >= zoom &&
        overlay.tileJSON.minzoom <= zoom &&
        /* Tjek om kortlaget overlapper kortvinduet med mere end den definerede
           buffer */
        bounds.intersects([
            [overlay.tileJSON.bounds[1]+(mapBuffer*Math.pow(2,18-zoom)), overlay.tileJSON.bounds[0]+(mapBuffer*Math.pow(2,18-zoom))],
            [overlay.tileJSON.bounds[3]-(mapBuffer*Math.pow(2,18-zoom)), overlay.tileJSON.bounds[2]-(mapBuffer*Math.pow(2,18-zoom))]
        ])) {
        layersControl.addOverlay(overlay.layer, overlay.tileJSON.name);
    }
}

function ready() {
    var TileJSON = this.getTileJSON();
    var overlay = {
        layer: this,
        tileJSON: TileJSON
    };
    overlays.push(overlay);
    addOverlay(overlay);
}

for (var i = 0; i < lag.length; i++) {
    L.mapbox.tileLayer('http://54.229.79.223:8888/v2/' + lag[i] + '.json').on('ready', ready);
}

var token;
map.on('viewreset move', function () {
    if (token) {
        clearTimeout(token);
    }
    token = setTimeout(function () {
        var zoom = map.getZoom();
        var bounds = map.getBounds();
        for (var i = 0; i < overlays.length; i++) {
            var overlay = overlays[i];
            layersControl.removeLayer(overlay.layer);
            addOverlay(overlay);
        }
    }, 500);
});
