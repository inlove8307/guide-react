import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxPopover.css";

const UxPopover = (props) => {
	const originClassName = "ux-popover";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxPopover;