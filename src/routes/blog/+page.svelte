<script lang="ts">
	import Prompt from '$lib/components/Prompt.svelte';
	import Card from '$lib/components/Card.svelte';
	import { blogPosts } from '$lib/data';
</script>

<svelte:head>
	<title>Blog — Dylan Satow</title>
	<meta name="description" content="Writing by Dylan Satow on software, ML, and tooling." />
</svelte:head>

<section class="space-y-5">
	<Prompt heading={1} command="ls -al blog/" />
	{#if blogPosts.length}
		<div class="space-y-5">
			{#each blogPosts as post, i}
				<Card title={post.title} meta={post.date} href="/blog/{post.slug}" index={i} />
			{/each}
		</div>
	{:else}
		<p class="border-l-2 border-border pl-4 text-fg-muted">No posts yet. Check back soon.</p>
	{/if}
</section>
