<script lang="ts">
	import { jobs, research } from '$lib/data';

	interface Props {
		selectedIndex: number;
		onSelect: (index: number) => void;
	}

	let { selectedIndex, onSelect }: Props = $props();
</script>

<div class="space-y-8">
	<div class="space-y-6">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">ls -al experience/jobs/</span>
		</div>
		{#each jobs as job, i}
			<div
				role="button"
				tabindex="-1"
				onclick={() => onSelect(i)}
				class="border-l-2 border-primary pl-4 cursor-pointer {selectedIndex === i ? 'bg-secondary/50' : ''}"
			>
				<div class="text-primary">{job.role}</div>
				<div class="text-muted-foreground text-sm">{job.company} • {job.period}</div>
				<div class="mt-1 text-foreground">{job.description}</div>
			</div>
		{/each}
	</div>

	<div class="space-y-6">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">ls -al experience/research/</span>
		</div>
		{#each research as item, i}
			<div
				role="button"
				tabindex="-1"
				onclick={() => onSelect(i + jobs.length)}
				class="border-l-2 border-primary pl-4 cursor-pointer {selectedIndex === i + jobs.length ? 'bg-secondary/50' : ''}"
			>
				<div class="text-primary">{item.role}</div>
				<div class="text-muted-foreground text-sm">{item.company} • {item.period}</div>
				<div class="mt-1 text-foreground">{item.description}</div>
			</div>
		{/each}
	</div>
</div>
