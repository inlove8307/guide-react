import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxCheckbox.css";

const Component = (props) => {
	const originClassName = "ux-checkbox";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default Component;