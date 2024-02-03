import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxSection.css";

const UxSection = (props) => {
	const originClassName = "ux-section";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<section className={mixinClassName}>
			{props.children}
		</section>
	);
};

export default UxSection;