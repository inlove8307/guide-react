import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxSpacer.css";

const UxSpacer = (props) => {
	const originClassName = "ux-spacer";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName} />
	);
};

export default UxSpacer;