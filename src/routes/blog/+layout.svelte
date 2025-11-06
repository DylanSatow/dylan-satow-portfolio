<script lang="ts">
	import TerminalHeader from '$lib/components/TerminalHeader.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-background text-foreground p-2 md:p-4">
	<div class="min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] border-2 border-border bg-card flex flex-col">
		<TerminalHeader />

		<div class="flex-1 overflow-y-auto p-4 md:p-6">
			<div class="mb-6">
				<a href="/" class="text-muted-foreground hover:text-primary">← back to portfolio</a>
			</div>

			<article class="prose prose-invert max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-primary">
				{@render children()}
			</article>
		</div>
	</div>
</div>
