import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxDropdown.css";

const Component = (props) => {
	const originClassName = "ux-dropdown";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default Component;