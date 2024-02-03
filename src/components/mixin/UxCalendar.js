import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxCalendar.css";

const UxCalendar = (props) => {
	const originClassName = "ux-calendar";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxCalendar;