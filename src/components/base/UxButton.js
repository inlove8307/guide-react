import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxButton.css";
import { getClosest } from "utils/dom";

const UxButton = (props) => {
	const originClassName = "ux-button";
	const mixinClassName = classnames(originClassName, props.className, {
		icon: !props.label && !props.children
	});

	const handleClick = (event) => {
		event.target = getClosest(event.target, `.${originClassName}`);
		props.onClick && props.onClick(event);
	};

	const handleFocus = (event) => {
		props.onFocus && props.onFocus(event);
	}

	const handleBlur = (event) => {
		props.onBlur && props.onBlur(event);
	}

	return (
		<span
			className={mixinClassName}
			style={props.style}
		>
			<button
				type="button"
				className={`${originClassName}-base`}
				disabled={props.disabled}
				onClick={handleClick}
				onFocus={handleFocus}
				onBlur={handleBlur}
			>
				{
					props.icon && props.icon.props.align === "left" &&
					props.icon
				}
				{ props.children && props.children }
				{
					!props.children && props.label &&
					<span className={`${originClassName}-label`}>
						{props.label}
					</span>
				}
				{
					props.icon && (!props.icon.props.align || props.icon.props.align === "right") &&
					props.icon
				}
			</button>
		</span>
	);
};

export default UxButton;