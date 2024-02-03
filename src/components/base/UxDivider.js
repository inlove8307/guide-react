import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxDivider.css";

const UxDivider = (props) => {
	const originClassName = "ux-divider";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName} />
	);
};

export default UxDivider;