import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxKeypad.css";

const Component = (props) => {
	const originClassName = "ux-keypad";
	const mixinClassName = classnames(originClassName, props.className);
	let keyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	props.shuffle && keyArray.sort(() => Math.random() - 0.5);
	keyArray.splice(9, 0, "delete");
	keyArray.splice(11, 0, "clear");

	const handleClick = (event) => {
		props.onClick && props.onClick(event);
	}

	const handler = {
		"delete": (event) => {
			props.onDelete && props.onDelete(event);
		},
		"clear": (event) => {
			props.onClear && props.onClear(event);
		}
	}

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				{
					keyArray.map((item, index) => {


						return (
							<button
								key={index}
								type="button"
								className={`${originClassName}-button`}
								data-value={isNaN(item) ? item : keyArray[index]}
								onClick={isNaN(item) ? handler[item] : handleClick}
							>
								<span className={`${originClassName}-label`}>
									{isNaN(item) ? item : keyArray[index]}
								</span>
							</button>
						)
					})
				}
			</div>
		</div>
	);
};

export default Component;