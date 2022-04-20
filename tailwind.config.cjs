module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)'
			},
			typography: {
				DEFAULT: {
					css: {
						color: 'var(--text-color)',
						a: {
							color: 'var(--link-color)',
							'&:hover': {
								backgroundColor: 'var(--tg-hint-color, initial)'
							}
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
