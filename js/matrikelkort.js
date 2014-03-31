/*global L, lag*/
var map = L.mapbox.map('map', {
    maxZoom: 20
});

var hash = L.hash(map);

L.control.fullscreen().addTo(map);

/*************************************************
 * https://github.com/runetvilum/Leaflet-geokeys *
 *************************************************/
L.geokeys.matrikelnr({
    placeholder: 'Søg matrikel'
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
        bounds.intersects([
            [overlay.tileJSON.bounds[1], overlay.tileJSON.bounds[0]],
            [overlay.tileJSON.bounds[3], overlay.tileJSON.bounds[2]]
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

map.on('viewreset move', function () {
    var zoom = map.getZoom();
    var bounds = map.getBounds();
    for (var i = 0; i < overlays.length; i++) {
        var overlay = overlays[i];
        layersControl.removeLayer(overlay.layer);
        addOverlay(overlay);
    }
});