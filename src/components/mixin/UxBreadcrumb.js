import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxBreadcrumb.css";

const UxBreadcrumb = (props) => {
	const originClassName = "ux-breadcrumb";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxBreadcrumb;