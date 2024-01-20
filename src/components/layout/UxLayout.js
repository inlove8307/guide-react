import React from "react";
import { isMobile } from "react-device-detect";
// LAYOUT
import UxContainer from "components/layout/UxContainer";
import UxHeader from "components/layout/UxHeader";
import UxMain from "components/layout/UxMain";
import UxFooter from "components/layout/UxFooter";
// STYLE
import "assets/css/style.css";
if (isMobile) {
	import("assets/css/mobile.css");
}

const Component = (props) => {
	return (
		<UxContainer className={ isMobile && "mobile" }>
			<UxHeader />
			<UxMain>
				{props.children}
			</UxMain>
			<UxFooter />
		</UxContainer>
	);
};

export default Component;