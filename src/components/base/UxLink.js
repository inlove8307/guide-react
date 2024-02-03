import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxLink.css";

const UxLink = (props) => {
	const originClassName = "ux-link";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<span className={mixinClassName}>
			<a
				className={`${originClassName}-base`}
				href={props.href}
			>
				<span className={`${originClassName}-label`}>
					{props.label || props.children}
				</span>
				{props.icon && props.icon}
			</a>
		</span>
	);
};

export default UxLink;