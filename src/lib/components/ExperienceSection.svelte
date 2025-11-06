<script lang="ts">
	import { jobs, research } from '$lib/data';
</script>

<div class="space-y-8">
	<div class="space-y-6">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">ls -al jobs/</span>
		</div>
		{#each jobs as job}
			<div class="border-l-2 border-primary pl-4">
				<div class="text-primary">{job.role}</div>
				<div class="text-muted-foreground text-sm">{job.company} • {job.period}</div>
				<div class="mt-1 text-foreground">{job.description}</div>
			</div>
		{/each}
	</div>

	<div class="space-y-6">
		<div>
			<span class="text-muted-foreground">$</span>
			<span class="text-foreground ml-2">ls -al research/</span>
		</div>
		{#each research as item}
			<div class="border-l-2 border-primary pl-4">
				<div class="text-primary">{item.role}</div>
				<div class="text-muted-foreground text-sm">{item.company} • {item.period}</div>
				<div class="mt-1 text-foreground">{item.description}</div>
			</div>
		{/each}
	</div>
</div>
