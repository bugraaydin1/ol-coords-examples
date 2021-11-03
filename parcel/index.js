import CoordsControl from "ol-coords/dist/cdn/ol-coords-cdn";
//import CoordsControl from "https://cdn.skypack.dev/-/ol-coords@v1.0.1-sXJYhG5Btz3WYSzwvHZH/dist=es2020,mode=imports/optimized/ol-coords.js";

(() => {
	const olMap = new ol.Map({
		target: "map",
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM(),
			}),
		],
		controls: ol.control.defaults({ attribution: true }).extend([
			new ol.control.ZoomSlider(),
			new CoordsControl({
				placeholder: "Fly to coordinates",
			}),
		]),
		view: new ol.View({
			zoom: 7,
			center: [34, 39], // ol.proj.fromLonLat([35, 39]) - projection: 'EPSG:3857'
			projection: ol.proj.get("EPSG:4326"),
		}),
	});
})();
