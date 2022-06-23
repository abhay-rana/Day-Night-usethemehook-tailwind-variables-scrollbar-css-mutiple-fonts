module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			custom: ["Roboto", "sans-sarif"],
			heading: ["Oswald", "sans-serif"],
		},
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: { DEFAULT: "#01b193", dark: "#0b7670", light: "#e1fdf8" },
				secondary: { DEFAULT: "#d9dd28" },
				warning: { DEFAULT: "#fb8903", light: "#fff0ca" },
				danger: { DEFAULT: "#ff0000", light: " #ffebeb" },
				success: { DEFAULT: "#5cb85c", light: "#ecffef" },
				gray: {
					dark: "#464646",
					DEFAULT: "#3c4858",
					medium: "#818181",
					light: "#b7b7b7",
					lightest: "#F4F4F4",
				},
				custom: {
					background: "var(--background)",
					foreground: "var(--foreground)",
				},
			},
			padding: {
				5: "1rem",
				15: "2rem",
			},
		},
	},
	plugins: [],
};
