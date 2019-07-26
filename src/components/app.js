import React, { useState } from "react";

import "./app.css";

import NavBar from "./nav-bar";
import ToolPanel from "./tool-panel";
import Canvas from "./canvas";

export default function App() {
	const defaultPenOptions = {
		strokeWidth: 10,
		lineType: "solid",
		color: "#000000"
	}
	const defaultEraserOptions = {
		strokeWidth: 10,
		lineType: "solid",
		color: "#ffffff"
	}
	const defaultStampOptions = { maxWidth: 200 }
	
	// Retrieve app state
	let cachedActiveTool = localStorage.getItem("activeTool");
	let cachedOptions = JSON.parse(localStorage.getItem("options"));
	
	const [activeTool, setActiveTool] = useState(cachedActiveTool || "pen");
	const [penOptions, setPenOptions] = useState(
		(cachedActiveTool === "pen" && cachedOptions) || defaultPenOptions
	);
	const [eraserOptions, setEraserOptions] = useState(
		(cachedActiveTool === "eraser" && cachedOptions) || defaultEraserOptions
	);
	const [stampOptions, setStampOptions] = useState(
		(cachedActiveTool === "stamp" && cachedOptions) || defaultStampOptions
	);
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
	
	// Store app state.
	localStorage.setItem("activeTool", activeTool);
	localStorage.setItem("options", JSON.stringify(options))
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
