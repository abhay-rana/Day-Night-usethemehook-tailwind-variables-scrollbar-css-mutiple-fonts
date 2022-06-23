import React from "react";

import { useTheme } from "./actions/useTheme";
import ChildComponent from "./compoenents/ChildComponent";
import Section from "./compoenents/Section";

const App = () => {
	const [theme, toggleTheme] = useTheme();

	return (
		<>
			<header className="">
				This is header
				<h1>current theme is :{theme}</h1>
				<button onClick={toggleTheme}>Toggle Theme</button>
			</header>
			<Section className="section bg-red-400 bg-custom-background text-custom-foreground" />
			<ChildComponent />
		</>
	);
};

export default App;
