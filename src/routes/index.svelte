<script lang="ts">
	import { onMount } from 'svelte';

	let telegram: TelegramWebApp;
	let theme: 'light' | 'dark';
	onMount(() => {
		telegram = window.Telegram.WebApp;
		theme = document.documentElement.className as 'light' | 'dark';
	});
</script>

<article class="prose dark:prose-invert">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<button>Hello</button>

	<pre>{JSON.stringify({ telegram, theme }, null, 2)}</pre>
</article>
