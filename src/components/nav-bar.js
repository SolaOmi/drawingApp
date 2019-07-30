import React from "react";

export default function NavBar({activeTool, setActiveTool}) {
	return (
		<div className="nav-bar">
			<div
				className={"nav-bar__tool" + (activeTool === "pen" ? " active" : "")}
				onClick={e => setActiveTool("pen")}
				title="Pen"
			>
				<i className="fas fa-pen"></i>
			</div>
			<div
				className={"nav-bar__tool" + (activeTool === "eraser" ? " active" : "")}
				onClick={e => setActiveTool("eraser")}
				title="Eraser"
			>
				<i className="fas fa-eraser"></i>
			</div>
			<div
				className={"nav-bar__tool" + (activeTool === "stamp" ? " active" : "")}
				onClick={e => setActiveTool("stamp")}
				title="Stamp"
			>
				<i className="fas fa-stamp"></i>
			</div>
			<div
				className={"nav-bar__tool" + (activeTool === "download" ? " active" : "")}
				onClick={e => setActiveTool("download")}
				title="Download"
			>
				<i className="far fa-save"></i>
			</div>
		</div>
	);
}