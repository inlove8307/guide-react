import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxSelect.css";

const Component = (props) => {
	const originClassName = "ux-select";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default Component;