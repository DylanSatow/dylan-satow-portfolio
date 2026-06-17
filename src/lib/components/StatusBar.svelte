<script lang="ts">
	import Clock from './Clock.svelte';
	import { shellPath } from '$lib/nav';

	let { pathname }: { pathname: string } = $props();
	let path = $derived(shellPath(pathname));
</script>

<footer
	class="flex shrink-0 items-center gap-3 border-t border-border bg-panel text-xs text-fg-muted"
>
	<!-- vim-style mode block -->
	<span class="bg-accent px-2 py-1.5 font-semibold tracking-wide text-on-accent sm:px-3"> NORMAL </span>

	<!-- keyboard hints (pointer devices) -->
	<span class="hidden items-center gap-3 [@media(hover:hover)]:flex">
		<span><kbd class="text-accent">h l</kbd> switch</span>
		<span><kbd class="text-accent">j k</kbd> move</span>
		<span><kbd class="text-accent">↵</kbd> open</span>
		<span><kbd class="text-accent">?</kbd> help</span>
	</span>

	<!-- touch hint -->
	<span class="[@media(hover:hover)]:hidden">tap to navigate</span>

	<!-- right: path + clock -->
	<span class="ml-auto flex items-center gap-3 px-3 py-1.5">
		<span class="hidden truncate text-path sm:inline">{path}</span>
		<Clock />
	</span>
</footer>
