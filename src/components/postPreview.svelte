<script lang="ts">
	export let pic: string;
	export let title: string;
	export let slug: string;
	export let date: string | Date;
</script>

<a href={'/posts/' + slug} class="link active:scale-95 focus:ring ring-primary/50 ">
	<div class="flex gap-2 h-16 bg-gray-200 dark:bg-black/40 p-2 not-prose select-none rounded-md">
		<img src={pic} alt={title} class="h-full aspect-square rounded-md" />
		<div class="flex-1">
			<p>{title}</p>
			<p class="text-sm ">{date.toLocaleString()}</p>
		</div>
	</div>
</a>
