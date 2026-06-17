<script lang="ts">
	import Prompt from '$lib/components/Prompt.svelte';
	import Card from '$lib/components/Card.svelte';
	import { projects } from '$lib/data';
</script>

<svelte:head>
	<title>Projects — Dylan Satow</title>
	<meta
		name="description"
		content="Projects by Dylan Satow: Manify (non-Euclidean representation learning), Ixion (AI lab management), a from-scratch CUDA neural network, and a multi-system Nix config."
	/>
</svelte:head>

<section class="space-y-5">
	<Prompt heading={1} command="ls -al projects/" />
	<div class="space-y-5">
		{#each projects as project, i}
			<Card
				title={project.name}
				description={project.description}
				tech={project.tech}
				href={project.link}
				external
				index={i}
			/>
		{/each}
	</div>
</section>
