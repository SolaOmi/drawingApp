import React from "react";

import Pen from "./panels/pen";
import Eraser from "./panels/eraser";
import Stamp from "./panels/stamp";
import Download from "./panels/download";

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
			{activeTool === "stamp" &&
				<Stamp
					stampOptions={penOptions}
					setStampOptions={setPenOptions}
				/>
			}
			{activeTool === "download" &&
				<Download
					downloadOptions={penOptions}
					setDownloadOptions={setPenOptions}
				/>
			}
		</div>
	);
}