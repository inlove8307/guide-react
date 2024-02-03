import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxTitle.css";

const UxTitle = (props) => {
	const originClassName = "ux-title";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxTitle;