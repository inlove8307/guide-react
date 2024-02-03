import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxFooter.css";
// LAYOUT
import UxSection from "components/layout/UxSection";
import UxArticle from "components/layout/UxArticle";
import UxContent from "components/layout/UxContent";

const UxFooter = (props) => {
	const originClassName = "ux-footer";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<footer className={mixinClassName}>
			<UxSection>
				<UxArticle>
					<UxContent>
						Footer
					</UxContent>
				</UxArticle>
			</UxSection>
		</footer>
	);
};

export default UxFooter;