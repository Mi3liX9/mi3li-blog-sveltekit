module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: 'var(--text-color)',
						a: {
							color: 'var(--link-color)'
							// '&:hover': {
							// 	color: '#2c5282'
							// }
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
