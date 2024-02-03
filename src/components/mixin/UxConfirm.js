import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxConfirm.css";

const UxConfirm = (props) => {
	const originClassName = "ux-confirm";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxConfirm;