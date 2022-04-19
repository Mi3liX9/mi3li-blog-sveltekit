<script>
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		window.Telegram.WebApp.ready();

		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
			window.Telegram.WebApp.colorScheme === 'dark'
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>
</svelte:head>

<slot />
