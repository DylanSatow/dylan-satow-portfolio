<script lang="ts">
	import { blogPosts } from '$lib/data';

	interface Props {
		selectedIndex: number;
		onSelect: (index: number) => void;
	}

	let { selectedIndex, onSelect }: Props = $props();
</script>

<div class="space-y-6">
	<div>
		<span class="text-muted-foreground">$</span>
		<span class="text-foreground ml-2">ls -al blog/</span>
	</div>
	{#each blogPosts as post, i}
		<a
			href="/blog/{post.slug}"
			onclick={() => onSelect(i)}
			class="block border-l-2 border-primary pl-4 hover:bg-secondary/30 py-2 cursor-pointer {selectedIndex === i ? 'bg-secondary/50' : ''}"
		>
			<div class="text-primary">{post.title}</div>
			<div class="text-muted-foreground text-sm">{post.date}</div>
		</a>
	{/each}
</div>
