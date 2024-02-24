import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxChip.css";

const UxChip = (props) => {
	const originClassName = "ux-chip";
	const mixinClassName = classnames(originClassName, props.className, {presentation: props.onClick});

	const handleClick = (event) => {
		props.onClick && props.onClick(event);
	}

	return (
		<div className={mixinClassName}>
			<span
				role="presentation"
				className={`${originClassName}-base`}
				onClick={handleClick}
			>
				{props.children && props.children}
				{
					!props.children && props.label &&
					<span className={`${originClassName}-label`}>
						{props.label}
					</span>
				}
				{props.icon && props.icon}
			</span>
		</div>
	);
};

export default UxChip;