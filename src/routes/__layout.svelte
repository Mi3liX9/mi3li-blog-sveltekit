<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		if (
			(window.Telegram.WebApp.initData && window.Telegram.WebApp.colorScheme === 'dark') ||
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		window.Telegram.WebApp.ready();
	});
</script>

<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />
