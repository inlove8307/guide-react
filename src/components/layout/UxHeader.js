import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxHeader.css";
// LAYOUT
import UxSection from "components/layout/UxSection";
import UxArticle from "components/layout/UxArticle";
import UxContent from "components/layout/UxContent";

const UxHeader = (props) => {
	const originClassName = "ux-header";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<header className={mixinClassName}>
			<UxSection>
				<UxArticle>
					<UxContent>
						Header
					</UxContent>
				</UxArticle>
			</UxSection>
		</header>
	);
};

export default UxHeader;