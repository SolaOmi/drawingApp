import React from "react";

import Pen from "./panels/pen";
import Eraser from "./panels/eraser";
import Stamp from "./panels/stamp";
import Download from "./panels/download";

export default function ToolPanel({
	activeTool,
	options,
	setOptions
}) {
	return (
		<div className="tool-panel">
			{activeTool === "pen" &&
				<Pen
					penOptions={options}
					setPenOptions={setOptions}
				/>
			}
			{activeTool === "eraser" &&
				<Eraser
					eraserOptions={options}
					setEraserOptions={setOptions}
				/>
			}
			{activeTool === "stamp" &&
				<Stamp
					stampOptions={options}
					setStampOptions={setOptions}
				/>
			}
			{activeTool === "download" &&
				<Download
					downloadOptions={options}
					setDownloadOptions={setOptions}
				/>
			}
		</div>
	);
}