import React from "react";

import PenIcon from "./icons/pen-icon";
import EraserIcon from "./icons/eraser-icon";
import StampIcon from "./icons/stamp-icon";
import SaveIcon from "./icons/save-icon";

export default function NavBar({activeTool, setActiveTool}) {
	return (
		<div className="nav-bar">
			<div
				className={"nav-bar__tool" + (activeTool === "pen" ? " active" : "")}
				onClick={e => setActiveTool("pen")}
				title="Pen"
			>
				<PenIcon />
			</div>
			<div
				className={"nav-bar__tool" + (activeTool === "eraser" ? " active" : "")}
				onClick={e => setActiveTool("eraser")}
				title="Eraser"
			>
				<EraserIcon />
			</div>
			<div
				className={"nav-bar__tool" + (activeTool === "stamp" ? " active" : "")}
				onClick={e => setActiveTool("stamp")}
				title="Stamp"
			>
				<StampIcon />
			</div>
			<div
				className={"nav-bar__tool" + (activeTool === "download" ? " active" : "")}
				onClick={e => setActiveTool("download")}
				title="Download"
			>
				<SaveIcon />
			</div>
		</div>
	);
}