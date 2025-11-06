<script lang="ts">
	import { experiences } from '$lib/data';
</script>

<div class="space-y-6">
	<div>
		<span class="text-muted-foreground">$</span>
		<span class="text-foreground ml-2">cat experience/*</span>
	</div>
	{#each experiences as exp}
		<div class="border-l-2 border-primary pl-4">
			<div class="text-primary">{exp.role}</div>
			<div class="text-muted-foreground text-sm">{exp.company} • {exp.period}</div>
			<div class="mt-1 text-foreground">{exp.description}</div>
		</div>
	{/each}
</div>
