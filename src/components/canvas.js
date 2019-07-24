import React, { useRef, useState, useEffect } from "react";

export default function Canvas({activeTool, options}) {
	const canvasRef = useRef(null);

	const [isDrawing, setIsDrawing] = useState(false);
	const [ctx, setCtx] = useState(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext("2d"));
	}, []);
	
	// Clear canvas
	useEffect(() => {
		const canvas = canvasRef.current;
		const clearBtn = document.getElementById('clear-btn');
		
		if (clearBtn) {
			clearBtn.addEventListener('click', () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			});
		}
	})
	
	// Download drawing
	useEffect(() => {
		const canvas = canvasRef.current;
		const downloadBtn = document.getElementById('download-btn');
		
		if (downloadBtn) {
			downloadBtn.addEventListener('click', () => {
				let dataURL = canvas.toDataURL('image/png');
				downloadBtn.href = dataURL;
			});
		}
	})

	const getX = (event) => {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - canvasRef.current.offsetLeft;
		}
		else {
			return event.pageX - canvasRef.current.offsetLeft;
		}
	};

	const getY = (event) => {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - canvasRef.current.offsetTop;
		}
		else {
			return event.pageY - canvasRef.current.offsetTop;
		}
	};

	const start = (event) => {
		if (activeTool === "pen" || activeTool === "eraser") {
			setIsDrawing(true);
			ctx.strokeStyle = options.color;
			ctx.beginPath();
			ctx.setLineDash(getLineDash(options.lineType));
			ctx.moveTo(getX(event), getY(event));
			event.preventDefault();
		} else if (activeTool === "stamp") {
			const img = document.getElementById('uploaded-image');
			let scale = options.maxWidth;
			ctx.drawImage(img, getX(event), getY(event), scale, scale);
		}
	};

	const draw = (event) => {
		if (isDrawing) {
			ctx.lineTo(getX(event), getY(event));
			ctx.lineWidth = options.strokeWidth;
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		event.preventDefault();
	};

	const end = (event) => {
		if (isDrawing) {
			ctx.stroke();
			ctx.closePath();
			setIsDrawing(false);
		}
		event.preventDefault();
	};
	
	const getLineDash = (lineType) => {
		let strokeWidth = options.strokeWidth;
		if (lineType === "solid") {
			return [];
		} else if (lineType === "dash") {
			return [6 * strokeWidth, 1 * strokeWidth];
		} else {
			return [1.5 * strokeWidth, 1.5 * strokeWidth];
		}
	}

	return (
		<canvas
			width={window.innerWidth - 270}
			height={window.innerHeight}
			className="canvas"
			ref={canvasRef}
			onMouseDown={start}
			onMouseMove={draw}
			onMouseUp={end}
		/>
	);
}