import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxSwitch.css";

const Component = (props) => {
	const originClassName = "ux-switch";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default Component;