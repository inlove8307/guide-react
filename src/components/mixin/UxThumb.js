import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxThumb.css";
import { mergeProps } from "utils/core";
import UxImage from "components/base/UxImage";

const UxThumb = (props) => {
	const originClassName = "ux-thumb";
	const mixinClassName = classnames(originClassName, props.className);

	const handleClick = (event) => {
		props.onClick && props.onClick();
	};

	const Component = (props) => {
		const element = <div className={mixinClassName} />
		const attribute = {
			role: "presentation",
			onClick: handleClick
		};
		const Component = props.onClick
			? mergeProps(element, {children: props.children, ...attribute})
			: mergeProps(element, {children: props.children});

		return Component;
	};

	return (
		<Component {...props}>
			<UxImage
				src={props.src}
				alt={props.alt}
				style={props.style}
			>
				{props.label}
			</UxImage>
			{props.icon && props.icon}
		</Component>
	);
};

export default UxThumb;