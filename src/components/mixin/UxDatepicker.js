import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxDatepicker.css";

const UxDatepicker = (props) => {
	const originClassName = "ux-datepicker";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxDatepicker;