import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxKeypad.css";

const Component = (props) => {
	const originClassName = "ux-keypad";
	const mixinClassName = classnames(originClassName, props.className);
	const [value, setValue] = useState(props.value || "");
	let keyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	props.shuffle && keyArray.sort(() => Math.random() - 0.5);

	const handleClick = (event)=>{
		setValue(value + event.target.dataset.value);
		props.onClick && props.onClick(event);
	}

	const handleDelete = (event)=>{
		setValue(value.slice(0, -1));
		props.onClick && props.onClick(event);
	}

	const handleClear = (event)=>{
		setValue("");
		props.onClick && props.onClick(event);
	}

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[0]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[0]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[1]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[1]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[2]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[2]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[3]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[3]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[4]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[4]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[5]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[5]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[6]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[6]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[7]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[7]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[8]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[8]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					onClick={handleDelete}
				>
					<span className={`${originClassName}-label`}>Delete</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					data-value={keyArray[9]}
					onClick={handleClick}
				>
					<span className={`${originClassName}-label`}>
						{keyArray[9]}
					</span>
				</button>
				<button
					type="button"
					className={`${originClassName}-button`}
					onClick={handleClear}
				>
					<span className={`${originClassName}-label`}>Clear</span>
				</button>
			</div>
		</div>
	);
};

export default Component;