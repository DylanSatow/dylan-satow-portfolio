<script lang="ts">
	import type { PageData } from './$types';
	import Prompt from '$lib/components/Prompt.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data }: { data: PageData } = $props();
	let Content = $derived(data.content as any);
</script>

<Seo
	title="{data.meta.title} — Dylan Satow"
	description={data.meta.description ?? `${data.meta.title} — a post by Dylan Satow.`}
	type="article"
/>

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
