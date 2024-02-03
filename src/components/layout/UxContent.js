import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxContent.css";

const UxContent = (props) => {
	const originClassName = "ux-content";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxContent;