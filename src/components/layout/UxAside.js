import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxAside.css";

const Component = (props) => {
	const originClassName = "ux-aside";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<aside className={mixinClassName}>
			Aside
		</aside>
	);
};

export default Component;