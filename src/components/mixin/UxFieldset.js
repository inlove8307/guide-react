import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxFieldset.css";

const UxFieldset = (props) => {
	const originClassName = "ux-fieldset";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<fieldset className={mixinClassName}>
			{
				props.legend &&
				<legend className={`${originClassName}-legend`}>{props.legend}</legend>
			}
			{props.children}
		</fieldset>
	);
};

export default UxFieldset;