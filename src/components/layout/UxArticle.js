import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxArticle.css";

const UxArticle = (props) => {
	const originClassName = "ux-article";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<article className={mixinClassName}>
			{props.children}
		</article>
	);
};

export default UxArticle;