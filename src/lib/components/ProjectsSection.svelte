<script lang="ts">
	import { projects } from '$lib/data';
</script>

<div class="space-y-6">
	<div>
		<span class="text-muted-foreground">$</span>
		<span class="text-foreground ml-2">ls projects/</span>
	</div>
	{#each projects as project}
		<div class="border-l-2 border-primary pl-4">
			<a href={project.link} class="text-primary hover:underline">{project.name}</a>
			<div class="text-foreground mt-1">{project.description}</div>
			<div class="text-muted-foreground text-sm mt-1">{project.tech}</div>
		</div>
	{/each}
</div>
