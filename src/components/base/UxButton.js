import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxButton.css";

const Component = (props) => {
	const originClassName = "ux-button";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<span className={mixinClassName}>
			<button
				type="button"
				className={`${originClassName}-base`}
				disabled={props.disabled}
			>
				{
					props.icon && props.align === "left" &&
					<i className={`${originClassName}-icon ${props.icon}`} />
				}
				{
					props.children ||
					<span className={`${originClassName}-label`}>{props.label}</span>
				}
				{
					props.icon && props.align === "right" &&
					<i className={`${originClassName}-icon ${props.icon}`} />
				}
			</button>
		</span>
	);
};

export default Component;