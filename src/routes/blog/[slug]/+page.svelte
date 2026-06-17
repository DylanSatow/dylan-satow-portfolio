<script lang="ts">
	import type { PageData } from './$types';
	import Prompt from '$lib/components/Prompt.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { getPost, formatDate } from '$lib/posts';

	let { data }: { data: PageData } = $props();
	let Content = $derived(data.content as any);
	let post = $derived(getPost(data.slug));
</script>

<Seo
	title="{data.meta.title} — Dylan Satow"
	description={data.meta.description ?? `${data.meta.title} — a post by Dylan Satow.`}
	image="/og/{data.slug}.png"
	type="article"
	publishedTime={post?.date}
	tags={post?.tags ?? []}
/>

<div class="space-y-5">
	<div class="flex items-center justify-between gap-4">
		<Prompt command="cat blog/{data.slug}.md" />
		<a
			href="/blog"
			class="flex min-h-[44px] shrink-0 items-center px-1 text-sm text-fg-muted underline-offset-2 hover:text-accent hover:underline active:text-accent"
		>
			cd ..
		</a>
	</div>

	{#if post}
		<div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fg-dim">
			<span>{formatDate(post.date)}</span>
			<span aria-hidden="true">·</span>
			<span>{post.readingMinutes} min read</span>
			{#if post.tags.length}
				<span aria-hidden="true">·</span>
				<span class="text-flag">{post.tags.join('  ')}</span>
			{/if}
		</div>
	{/if}

	<article class="border-l-2 border-border pl-4 sm:pl-6">
		<Content />
	</article>
</div>
