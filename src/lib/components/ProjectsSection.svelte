<script lang="ts">
	import { projects } from '$lib/data';

	interface Props {
		selectedIndex: number;
		onSelect: (index: number) => void;
	}

	let { selectedIndex, onSelect }: Props = $props();
</script>

<div class="space-y-6">
	<div>
		<span class="text-muted-foreground">$</span>
		<span class="text-foreground ml-2">ls -al projects/</span>
	</div>
	{#each projects as project, i}
		<div
			onclick={() => onSelect(i)}
			class="border-l-2 border-primary pl-4 cursor-pointer {selectedIndex === i ? 'bg-secondary/50' : ''}"
		>
			<a href={project.link} class="text-primary hover:underline">{project.name}</a>
			<div class="text-foreground mt-1">{project.description}</div>
			<div class="text-muted-foreground text-sm mt-1">{project.tech}</div>
		</div>
	{/each}
</div>
