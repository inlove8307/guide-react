import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxBadge.css";

const UxBadge = (props) => {
	const originClassName = "ux-badge";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			<span className={`${originClassName}-base`}>
				{props.label}
			</span>
		</div>
	);
};

export default UxBadge;