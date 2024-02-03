import React, { useContext } from "react";
import { isMobile } from "react-device-detect";
// LAYOUT
import UxContainer from "components/layout/UxContainer";
import UxHeader from "components/layout/UxHeader";
import UxMain from "components/layout/UxMain";
import UxFooter from "components/layout/UxFooter";
import UxModals from "components/layout/UxModals";
// STYLE
import "assets/css/style.css";
if (isMobile) {
	import("assets/css/mobile.css");
}

const UxLayout = (props) => {
	return (
		<UxContainer className={ isMobile && "mobile" }>
			<UxHeader />
			<UxMain>
				{props.children}
			</UxMain>
			<UxFooter />
			<UxModals />
		</UxContainer>
	);
};

export default UxLayout;