import React from "react";

import Pen from "./panels/pen";
import Eraser from "./panels/eraser";

export default function ToolPanel({
	activeTool,
	penOptions,
	setPenOptions
}) {
	return (
		<div className="tool-panel">
			{activeTool === "pen" &&
				<Pen
					penOptions={penOptions}
					setPenOptions={setPenOptions}
				/>
			}
			{activeTool === "eraser" &&
				<Eraser
					eraserOptions={penOptions}
					setEraserOptions={setPenOptions}
				/>
			}
		</div>
	);
}