<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import '../styles/app.css';
	import prismjs from '../styles/prismjs.css';
	onMount(() => {
		window.Telegram.WebApp.ready();
		changeTheme();
	});

	function changeTheme() {
		if (window.Telegram.WebApp.initData && window.Telegram.WebApp.colorScheme === 'dark')
			return document.documentElement.classList.add('dark');

		if (
			!window.Telegram.WebApp.initData &&
			(localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
		) {
			return document.documentElement.classList.add('dark');
		}
		return document.documentElement.classList.remove('dark');
	}
</script>

<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700;800;900&family=Readex+Pro:wght@200;300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<link href={prismjs} rel="stylesheet" />
</svelte:head>

<slot />
