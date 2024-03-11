import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxText.css";

const UxText = (props) => {
	const originClassName = "ux-text";
	const mixinClassName = classnames(originClassName, props.className, props.bullet, {prefix: props.prefix});

	return (
		<div className={mixinClassName}>
			{
				(props.prefix || props.bullet) &&
				<span className={`${originClassName}-prefix`}>{props.prefix}</span>
			}
			<div className={`${originClassName}-label`}>{props.label || props.children}</div>
		</div>
	);
};

export default UxText;