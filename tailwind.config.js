module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
		},
		extend: {
			gridTemplateColumns: {
				"picture-grid": "repeat(auto-fit, 267px)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
