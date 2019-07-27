import React, { useRef } from "react";

export default function Pen({penOptions, setPenOptions}) {
	const prevColorRef = useRef();
	prevColorRef.current = penOptions.color;

	const decToHex = (c) => {
		let hex = c.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	}
	const rgbToHex = (r, g, b) => "#" + decToHex(r) + decToHex(g) + decToHex(b)

	const getPreviousColor = (e) => {
		// Regex that returns rgb color values as strings.
		const colorValues = (e.target.style.backgroundColor).match(/\d+/g);
		const [r, g, b] = colorValues.map(val => Number(val));
		document.getElementById("color-picker").value = rgbToHex(r, g, b);

		setPenOptions({...penOptions,
			color: rgbToHex(r, g, b),
			previousColors: setPreviousColor()
		});
	}

	const setPreviousColor = () => {
		const colors = penOptions.previousColors;
		if (!colors.includes(prevColorRef.current)) {
			if (colors.length === 6) {
				colors.slice(1);
			}
			return colors.concat(prevColorRef.current);
		}
		return colors;
	}

	const colorSwatches = penOptions.previousColors.map((color, index) =>
		<li
			key={index}
			style={{background: color}}
			onClick={e => getPreviousColor(e)}
		/>
	);

	const updateState = (e) => {
		setPenOptions({...penOptions,
			color: e.target.value,
			previousColors: setPreviousColor()
		});
	}

	return(
		<div>
			<h1>Pen</h1>
			<section>
				<label>
					<h4 className="inline">Stroke Color: </h4>
					<input
						id="color-picker"
						type="color"
						value={penOptions.color}
						onChange={e => updateState(e)}
					/>
				</label>
				<ul id="swatches">
					{colorSwatches}
				</ul>
			</section>
			<section>
				<label>
					<h4>Stroke Width: {penOptions.strokeWidth}</h4>
					<input
						type="range"
						value={penOptions.strokeWidth}
						onChange={e => setPenOptions({...penOptions, strokeWidth: e.target.value})}
						name="stroke-width"
					/>
				</label>
			</section>
			<section>
				<h4>Line Type:</h4>
				<div className="line-types">
					<input
						id="option1"
						type="radio"
						value="solid"
						onChange={e => setPenOptions({...penOptions, lineType: "solid"})}
						checked={penOptions.lineType === "solid"}
					/>
					<label htmlFor="option1">
						<span className="line-types__option">Solid</span>
					</label>
					<input
						id="option2"
						type="radio"
						value="dash"
						onChange={e => setPenOptions({...penOptions, lineType: "dash"})}
						checked={penOptions.lineType === "dash"}
					/>
					<label htmlFor="option2">
						<span className="line-types__option">Dashed</span>
					</label>
					<input
						id="option3"
						type="radio"
						value="dot"
						onChange={e => setPenOptions({...penOptions, lineType: "dot"})}
						checked={penOptions.lineType === "dot"}
					/>
					<label htmlFor="option3">
						<span className="line-types__option">Dotted</span>
					</label>
				</div>
			</section>
		</div>
	);
}
