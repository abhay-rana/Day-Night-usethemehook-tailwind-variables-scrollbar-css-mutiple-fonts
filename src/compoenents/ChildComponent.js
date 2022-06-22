import React from "react";
import { useTheme } from "../actions/useTheme";

const ChildComponent = () => {
	const [theme, toggleTheme] = useTheme();
	return (
		<>
			<div className="pt-4">
				<div>
					<button onClick={toggleTheme}>Toggle Theme : {theme}</button>
				</div>
				<div className="m-1 border-2 text-red-700 border-pink-600 w-40">
					<a href="#header">Go to the top</a>
				</div>
			</div>
		</>
	);
};

export default ChildComponent;
