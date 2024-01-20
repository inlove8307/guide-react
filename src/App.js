import React from "react";
import { isMobile } from "react-device-detect";
// LAYOUT
import UxContainer from "./components/layout/UxContainer";
import UxHeader from "./components/layout/UxHeader";
import UxFooter from "./components/layout/UxFooter";
import UxMain from "./components/layout/UxMain";
// PAGES
import Sample from "./pages/Sample";
// STYLE
import "./assets/css/style.css";
if (isMobile) {
	import('./assets/css/mobile.css');
}

function App() {
	return (
		<UxContainer className={ isMobile && "mobile" }>
			<UxHeader />
			<UxMain>
				<Sample />
			</UxMain>
			<UxFooter />
		</UxContainer>
	);
}

export default App;
