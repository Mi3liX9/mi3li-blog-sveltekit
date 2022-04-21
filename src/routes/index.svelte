<script context="module">
	import { getPosts } from '../utils/posts';

	export async function load() {
		const posts = getPosts();
		return {
			props: {
				posts
			}
		};
	}
</script>

<script lang="ts">
	import type { PostProps } from 'src/utils/posts';
	import PostPreview from '../components/postPreview.svelte';
	import { onMount } from 'svelte';
	export let posts: { metadata: PostProps }[];

	let isTelegram: boolean;
	let tgApp: TelegramWebApp;
	onMount(() => {
		isTelegram = !!window.Telegram.WebApp.initData;
		tgApp = window.Telegram.WebApp;
	});
</script>

<div class="flex flex-col py-2">
	<div>
		<h2>مرحبًا بك في مايتي بلوق</h2>
		<p>
			تم صناعة تطبيق الويب هذا لتجربة بوتات الويب في تيليجرام وامكانياتها الهائلة. كما المتوقع في
			هذه الصفحة ان يتم اضافة تقييمات وتجارب المنتجات اكثر من كتابة الاخبار وغيرها.
		</p>

		<p>
			من امكانيات بوتات الويب هي التعرف على الثيم الخاص بك، كما يمكنه التعرف على اسمك واسم المستخدم
			الخاص بك.

			{#if isTelegram}
				فعلى سبيل المثال:
			{:else}
				جرب أن
				<a href="https://t.me/mi3li_blog_bot">تفتح الصفحة عن طريق تيليجرام</a>
				وتأكد أن يكون لديك أخر اصدار.
			{/if}
		</p>
		{#if isTelegram}
			<ul>
				<li>
					اسمك هو: {tgApp.initDataUnsafe.user.first_name}
					{tgApp.initDataUnsafe.user.last_name}
				</li>
				<li>
					اسم المستخدم الخاص بك هو <a
						dir="ltr"
						target="_blanck"
						href={'https://t.me/' + tgApp.initDataUnsafe.user.username}
						>@{tgApp.initDataUnsafe.user.username}</a
					>
				</li>
				<li>الثيم الخاص بك هو {tgApp.colorScheme}</li>
			</ul>
		{/if}
	</div>
	<h2>آخر المنشورات (تجريبي)</h2>
	<div class="flex flex-col gap-2">
		{#each posts as post (post.metadata.slug)}
			<PostPreview
				title={post.metadata.title}
				pic={post.metadata.image}
				date={post.metadata.date}
				slug={post.metadata.slug}
			/>
		{/each}
	</div>
</div>
