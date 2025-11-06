<script lang="ts">
	import { blogPosts } from '$lib/data';

	let selectedPost = $state(null);

	function renderMarkdown(md: string) {
		return md
			.replace(/^# (.*$)/gim, '<h1 class="text-xl text-primary mb-4">$1</h1>')
			.replace(/^## (.*$)/gim, '<h2 class="text-lg text-primary mb-3">$1</h2>')
			.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
			.replace(/\n\n/g, '</p><p class="mb-4">');
	}
</script>

<div class="space-y-6">
	{#if !selectedPost}
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">ls blog/</span>
		</div>
		{#each blogPosts as post}
			<button
				onclick={() => selectedPost = post}
				class="block border-l-2 border-primary pl-4 text-left hover:bg-secondary/30 w-full py-2"
			>
				<div class="text-primary">{post.title}</div>
				<div class="text-muted-foreground text-sm">{post.date}</div>
			</button>
		{/each}
	{:else}
		<div>
			<button onclick={() => selectedPost = null} class="text-muted-foreground hover:text-primary">
				← back
			</button>
		</div>
		<div class="prose prose-invert max-w-none">
			{@html renderMarkdown(selectedPost.content)}
		</div>
	{/if}
</div>
