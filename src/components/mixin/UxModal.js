import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxModal.css";

const Component = (props) => {
	const originClassName = "ux-modal";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default Component;