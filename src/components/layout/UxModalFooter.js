import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxModal.css";

const UxModalFooter = (props) => {
	const originClassName = "ux-modal-footer";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			{props.children}
		</div>
	);
};

export default UxModalFooter;