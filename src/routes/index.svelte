<script lang="ts">
	import PostPreview from 'src/components/postPreview.svelte';
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
			pic: 'https://picsum.photos/id/1/200/200',
			createdAt: new Date()
		},
		{
			id: 2,
			title: 'منشور رقم 2',
			pic: 'https://picsum.photos/id/2/200/200',
			createdAt: new Date()
		},
		{
			id: 3,
			title: 'منشور رقم 3',
			pic: 'https://picsum.photos/id/3/200/200',
			createdAt: new Date()
		},
		{
			id: 4,
			title: 'منشور رقم 4',
			pic: 'https://picsum.photos/id/4/200/200',
			createdAt: new Date()
		}
	];
</script>

<article dir="rtl" class="">
	<h1>مرحبًا بك في مايتي بلوق</h1>
	{#if telegram?.initData}
		<p>حياك الله {telegram.initDataUnsafe.user.first_name}</p>
	{/if}
	<div class="flex flex-col gap-2">
		{#each posts as post (post.id)}
			<PostPreview title={post.title} pic={post.pic} createdAt={post.createdAt} />
		{/each}
	</div>
</article>
