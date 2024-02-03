import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxRange.css";

const UxRange = (props) => {
	const originClassName = "ux-range";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxRange;