<script lang="ts">
	import { skills } from '$lib/data';
</script>

<div class="space-y-4">
	<div>
		<span class="text-muted-foreground">$</span>
		<span class="text-foreground ml-2">cat about.txt</span>
	</div>
	<p class="leading-relaxed text-foreground">
		Hey! I'm a developer who loves building things with code.
		I'm passionate about clean code, terminal aesthetics, and creating
		delightful user experiences.
	</p>
	<div class="mt-6">
		<span class="text-muted-foreground">$</span>
		<span class="text-foreground ml-2">cat skills.txt</span>
	</div>
	<div class="flex flex-wrap gap-2 mt-2">
		{#each skills as skill}
			<span class="text-primary">{skill}</span>
		{/each}
	</div>
</div>
