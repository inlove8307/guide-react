import React from "react";
import classnames from "classnames";
import "assets/css/components/layout/UxDock.css";
// LAYOUT
import UxSection from "components/layout/UxSection";
import UxArticle from "components/layout/UxArticle";
import UxContent from "components/layout/UxContent";

const UxDock = (props) => {
	const originClassName = "ux-dock";
	const mixinClassName = classnames(originClassName, props.className);

	return (
		<UxSection className={mixinClassName}>
			<UxArticle>
				<UxContent>
					{props.children}
				</UxContent>
			</UxArticle>
		</UxSection>
	);
};

export default UxDock;