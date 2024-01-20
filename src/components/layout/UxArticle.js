import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxArticle.css";

const Component = (props) => {
	const originClassName = "ux-article";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<section className={mixinClassName}>
			{props.children}
		</section>
	);
};

export default Component;