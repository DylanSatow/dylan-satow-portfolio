<script lang="ts">
	import Prompt from '$lib/components/Prompt.svelte';
	import Card from '$lib/components/Card.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { jobs, research } from '$lib/data';
</script>

<Seo
	title="Experience — Dylan Satow"
	description="Dylan Satow's experience: SDE intern at AWS, data science at Pharmavite, and ML research across four Columbia labs."
/>

<div class="space-y-10">
	<section class="space-y-5">
		<Prompt heading={1} command="ls -al experience/work/" />
		<div class="space-y-5">
			{#each jobs as job}
				<Card title={job.role} meta="{job.company} · {job.period}" description={job.description} />
			{/each}
		</div>
	</section>

	<section class="space-y-5">
		<Prompt heading={2} command="ls -al experience/research/" />
		<div class="space-y-5">
			{#each research as item}
				<Card title={item.role} meta="{item.company} · {item.period}" description={item.description} />
			{/each}
		</div>
	</section>
</div>
