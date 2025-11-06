<script lang="ts">
	import TerminalHeader from '$lib/components/TerminalHeader.svelte';

	let { children } = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
			return;
		}

		if (e.key === 'h') {
			window.location.href = '/';
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="min-h-screen bg-background text-foreground p-2 md:p-4">
	<div class="min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] border-2 border-border bg-card flex flex-col">
		<TerminalHeader />

		<div class="flex-1 overflow-y-auto p-4 md:p-6">
			<div class="mb-6">
				<a href="/" class="text-muted-foreground hover:text-primary">← back to portfolio</a>
			</div>

			<article class="max-w-3xl">
				{@render children()}
			</article>
		</div>
	</div>
</div>
