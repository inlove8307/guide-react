import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxThumb.css";

const UxThumb = (props) => {
	const originClassName = "ux-thumb";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxThumb;