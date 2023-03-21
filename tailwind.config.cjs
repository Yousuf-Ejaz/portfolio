const daisyui = require("daisyui");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			body: ['"Fira Code"'],
		},
		extend: {},
	},
	plugins: [daisyui],
};
