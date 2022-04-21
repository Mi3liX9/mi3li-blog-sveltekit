import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.mdx'],
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md', '.mdx']
			// layout: './src/layouts/PostLayout.svelte'
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					src: './src',
					components: './src/components',
					layouts: './src/layouts',
					routes: './src/routes',
					utils: './src/utils'
				}
			}
		}
	}
};

export default config;
