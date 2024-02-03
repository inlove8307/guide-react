import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxMain.css";

const UxMain = (props) => {
	const originClassName = "ux-main";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<main className={mixinClassName}>
			{props.children}
		</main>
	);
};

export default UxMain;