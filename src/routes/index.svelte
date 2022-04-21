<script lang="ts">
	import PostPreview from '../components/postPreview.svelte';
	import { onMount } from 'svelte';

	let telegram: TelegramWebApp;
	let theme: 'light' | 'dark';
	onMount(() => {
		telegram = window.Telegram.WebApp;
		theme = document.documentElement.className as 'light' | 'dark';
	});

	const posts = [
		{
			id: 1,
			title: 'منشور رقم 1',
			slug: 'post-1',
			pic: 'https://picsum.photos/id/1/200/200',
			createdAt: new Date()
		}
	];
</script>

<article dir="rtl" class="py-2">
	<h1>مرحبًا بك في مايتي بلوق</h1>
	{#if telegram?.initData}
		<p>حياك الله {telegram.initDataUnsafe.user.first_name}</p>
	{/if}
	<div class="flex flex-col gap-2">
		{#each posts as post (post.id)}
			<PostPreview title={post.title} pic={post.pic} createdAt={post.createdAt} slug={post.slug} />
		{/each}
	</div>
</article>
