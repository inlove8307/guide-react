import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxToast.css";

const UxToast = (props) => {
	const originClassName = "ux-toast";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxToast;