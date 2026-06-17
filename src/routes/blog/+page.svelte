<script lang="ts">
	import Prompt from '$lib/components/Prompt.svelte';
	import Card from '$lib/components/Card.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { posts, formatDate } from '$lib/posts';
</script>

<Seo title="Blog — Dylan Satow" description="Writing by Dylan Satow on software engineering, distributed systems, ML, and tooling." />

<section class="space-y-5">
	<Prompt heading={1} command="ls -al blog/" />
	{#if posts.length}
		<div class="space-y-5">
			{#each posts as post, i}
				<Card
					title={post.title}
					meta="{formatDate(post.date)} · {post.readingMinutes} min read"
					description={post.description}
					href="/blog/{post.slug}"
					index={i}
				/>
			{/each}
		</div>
	{:else}
		<p class="border-l-2 border-border pl-4 text-fg-muted">No posts yet. Check back soon.</p>
	{/if}
</section>
