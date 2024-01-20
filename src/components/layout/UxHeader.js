import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxHeader.css";

const Component = (props) => {
	const originClassName = "ux-header";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<header className={mixinClassName}>
			<section>
				<article>
					Header
				</article>
			</section>
		</header>
	);
};

export default Component;