import React from "react";
import { Route, Routes } from "react-router";
import Main from "./pages/Main/Main";

function App() {
	return (
		<div className="classes.App">
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
