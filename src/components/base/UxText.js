import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxText.css";

const Component = (props) => {
	const originClassName = "ux-text";
	const mixinClassName = classnames(originClassName, props.className, {bullet: props.bullet}, {prefix: props.prefix});

	return (
		<div className={mixinClassName}>
			{
				props.prefix &&
				<span className={`${originClassName}-prefix`}>{props.prefix}</span>
			}
			{
				props.bullet &&
				<span className={`${originClassName}-bullet ${props.bullet}`} />
			}
			{
				props.label
				? <p className={`${originClassName}-label`}>{props.label}</p>
				: <p>{props.children}</p>
			}
		</div>
	);
};

export default Component;