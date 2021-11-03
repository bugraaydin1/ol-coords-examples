import React from "react";
import ReactDOM from "react-dom";
import MapApp from "./mapApp";
import "./index.css";
import "ol/ol.css";

ReactDOM.render(
	<React.StrictMode>
		<MapApp />
	</React.StrictMode>,
	document.getElementById("root")
);
