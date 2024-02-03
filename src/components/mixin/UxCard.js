import React from "react";
import classnames from "classnames";
import "assets/css/components/mixin/UxCard.css";

const UxCard = (props) => {
	const originClassName = "ux-card";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<div className={mixinClassName}>
			<div className={`${originClassName}-base`}>
				{props.children}
			</div>
		</div>
	);
};

export default UxCard;