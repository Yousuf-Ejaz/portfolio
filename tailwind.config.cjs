const daisyui = require("daisyui");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}", "node_modules/preline/dist/*.js"],
	theme: {
		fontFamily: {
			body: ['"Fira Code"'],
		},
		extend: {},
	},
	plugins: [daisyui, require("preline/plugin")],
};
