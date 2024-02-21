import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxIcon.css";
import { mergeProps } from "utils/core";

const UxIcon = (props) => {
	const originClassName = classnames(`ux-icon-${props.icon}`, props.color);
	const mixinClassName = classnames(originClassName, props.className);

	const handleClick = (event) => {
		event.stopPropagation();
		props.onClick && props.onClick();
	};

	const Component = (props) => {
		const element = <i className={mixinClassName} />
		const attribute = {
			role: "presentation",
			onClick: handleClick
		};

		return (
				props.onClick
				? mergeProps(element, attribute)
				: element
		);
	}

	return <Component {...props} />;
};

export default UxIcon;