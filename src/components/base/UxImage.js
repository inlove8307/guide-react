import React from "react";
import classnames from "classnames";
import "assets/css/components/base/UxImage.css";

const Component = (props) => {
	const originClassName = "ux-image";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<figure className={mixinClassName}>
			<img
				className={`${originClassName}-base`}
				src={props.src}
				alt={props.alt}
			/>
			{
				props.children &&
				<figcaption className={`${originClassName}-caption`}>
					{props.children}
				</figcaption>
			}
		</figure>
	);
};

export default Component;