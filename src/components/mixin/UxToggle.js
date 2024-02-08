import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxToggle.css";

const UxToggle = (props) => {
	const originClassName = "ux-toggle";
	const mixinClassName = classnames(originClassName, props.className);
	const [isToggle, setIsToggle] = useState(props.isToggle || false);

	const handleClick = () => {
		!props.isGroup && setIsToggle(!isToggle);
		props.onClick && props.onClick();
	};

	useEffect(() => {
		props.onChange && props.onChange(isToggle);
	}, [isToggle]);

	return (
		<div className={classnames(mixinClassName, {
			fill: props.isGroup ? props.isToggle : isToggle
		})}>
			<button
				type="button"
				className={`${originClassName}-base`}
				onClick={handleClick}
			>
				{props.label}
			</button>
		</div>
	);
};

export default UxToggle;