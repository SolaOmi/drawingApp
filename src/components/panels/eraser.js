import React from "react";

export default function Eraser({eraserOptions, setEraserOptions}) {

	return(
		<div>
			<h1>Eraser</h1>
			<section>
				<label>
					<h4>Stroke Width: {eraserOptions.strokeWidth}</h4>
					<input
						value={eraserOptions.strokeWidth}
						onChange={e => setEraserOptions({...eraserOptions, strokeWidth: e.target.value})}
						name="stroke-width"
						max="100"
						min="1"
					/>
				</label>
			</section>
			<button id="clear-btn">Clear Canvas</button>
		</div>
	);
}