<script lang="ts">
	import type { PageData } from './$types';
	import Prompt from '$lib/components/Prompt.svelte';

	let { data }: { data: PageData } = $props();
	let Content = $derived(data.content as any);
</script>

<svelte:head>
	<title>{data.meta.title} — Dylan Satow</title>
	{#if data.meta.description}
		<meta name="description" content={data.meta.description} />
	{/if}
</svelte:head>

<div class="space-y-5">
	<div class="flex items-center justify-between gap-4">
		<Prompt command="cat blog/{data.slug}.md" />
		<a
			href="/blog"
			class="shrink-0 text-sm text-fg-muted underline-offset-2 hover:text-accent hover:underline"
		>
			cd ..
		</a>
	</div>

	<article class="border-l-2 border-border pl-4 sm:pl-6">
		<Content />
	</article>
</div>
