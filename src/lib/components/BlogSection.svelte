<script lang="ts">
	import { blogPosts } from '$lib/data';
</script>

<div class="space-y-6">
	<div>
		<span class="text-muted-foreground">$</span>
		<span class="text-foreground ml-2">ls blog/</span>
	</div>
	{#each blogPosts as post}
		<a
			href="/blog/{post.slug}"
			class="block border-l-2 border-primary pl-4 hover:bg-secondary/30 py-2"
		>
			<div class="text-primary">{post.title}</div>
			<div class="text-muted-foreground text-sm">{post.date}</div>
		</a>
	{/each}
</div>
