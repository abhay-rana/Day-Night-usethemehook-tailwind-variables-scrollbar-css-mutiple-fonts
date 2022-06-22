// A custom theme hook for toggling the theme and giving you the current theme
//check firstly the local storage of the browser if there is no saved theme so it check for the user system preferences and if that is also set to default
// so show the light theme to the user
import { useEffect, useRef, useState } from "react";

//globally saved the updated user preferences theme
//save theme is null so check the window preferences if it is not dark so return false which will be a "light"
let global_theme = window.localStorage.getItem("theme") ?? (!window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
export const useTheme = () => {
	let theme_event = useRef();

	const [theme, setTheme] = useState(global_theme); //when the useTheme instance is created so take its value from the globally stored variable

	const fireOnToggle = (event) => {
		setTheme(global_theme);
	};

	useEffect(() => {
		global_theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"); //toggles to the html root element
		theme_event.current = new CustomEvent("theme_event");
		document.addEventListener("theme_event", fireOnToggle);
		return () => {
			document.removeEventListener("theme_event", fireOnToggle);
		};
	}, []);

	const toggleTheme = () => {
		let toggle_theme = theme === "light" ? "dark" : "light";
		window.localStorage.setItem("theme", toggle_theme); //save to the local storage
		toggle_theme == "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"); //toggles to the html root element
		global_theme = toggle_theme; //change the toggle_theme to the global stored theme variable
		document.dispatchEvent(theme_event.current); //dispatch the event when the theme is toggles
	};

	return [theme, toggleTheme];
};
