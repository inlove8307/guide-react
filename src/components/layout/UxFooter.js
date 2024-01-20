import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxFooter.css";

const Component = (props) => {
	const originClassName = "ux-footer";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<footer className={mixinClassName}>
			<section>
				<article>
					Footer
				</article>
			</section>
		</footer>
	);
};

export default Component;