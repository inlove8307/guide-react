import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxPagination.css";

const UxPagination = (props) => {
	const originClassName = "ux-pagination";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxPagination;