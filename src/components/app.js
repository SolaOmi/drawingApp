import React, { useState } from "react";

import "./app.css";

import NavBar from "./nav-bar";
import ToolPanel from "./tool-panel";
import Canvas from "./canvas";

export default function App() {

	/*
		If the syntax below (`useState(...)` etc.) looks unfamiliar to you,
		check out the docs on "React Hooks" we link to in the Resources section of the README.
	*/
	const [activeTool, setActiveTool] = useState("pen");
	const [penOptions, setPenOptions] = useState({
		strokeWidth: 10,
		lineType: "solid",
		color: "#000000",
		previousColors: []
	});
	const [eraserOptions, setEraserOptions] = useState({
		strokeWidth: 10,
		lineType: "solid",
		color: "#ffffff"
	});
	const [stampOptions, setStampOptions] = useState({
		maxWidth: 200
	});
	const [downloadOptions, setDownloadOptions] = useState({});
	
	let options, setOptions;
	if (activeTool === "pen") {
		[options, setOptions] = [penOptions, setPenOptions];
	} else if (activeTool === "eraser") {
		[options, setOptions] = [eraserOptions, setEraserOptions];
	} else if (activeTool === "stamp") {
		[options, setOptions] = [stampOptions, setStampOptions];
	} else {
		[options, setOptions] = [downloadOptions, setDownloadOptions];
	}
	
	return(
		<React.Fragment>
			<NavBar
				activeTool={activeTool}
				setActiveTool={setActiveTool}
			/>
			<ToolPanel
				activeTool={activeTool}
				options={options}
				setOptions={setOptions}
			/>
			<Canvas
				activeTool={activeTool}
				options={options}
			/>
		</React.Fragment>
	);
}
