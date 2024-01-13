import UxHeader from "./components/layout/UxHeader";
import UxFooter from "./components/layout/UxFooter";
import UxMain from "./components/layout/UxMain";
import Sample from "./pages/Sample";

import "./assets/css/style.css";

function App() {
	return (
		<div className="ux-container">
			<UxHeader />
			<UxMain>
				<Sample />
			</UxMain>
			<UxFooter />
		</div>
	);
}

export default App;
