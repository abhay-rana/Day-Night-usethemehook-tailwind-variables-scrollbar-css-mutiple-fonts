import React from "react";
import { useTheme } from "../actions/useTheme";

const ChildComponent = () => {
	const [theme, toggleTheme] = useTheme();
	return (
		<>
			<div>
				<button onClick={toggleTheme}>Toggle Theme : {theme}</button>
			</div>
			<div>
				<a href="#header">Go to the top</a>
			</div>
		</>
	);
};

export default ChildComponent;
