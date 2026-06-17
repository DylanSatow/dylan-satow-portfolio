<script lang="ts">
	import { profile } from '$lib/data';
	import { shellPath } from '$lib/nav';

	let { pathname }: { pathname: string } = $props();
	let path = $derived(shellPath(pathname));
</script>

<header
	class="flex shrink-0 items-center gap-3 border-b border-border bg-panel px-3 py-2 text-xs sm:px-4 sm:text-sm"
>
	<!-- tiling-WM workspace tag -->
	<span class="font-semibold text-accent-2" aria-hidden="true">[1]</span>

	<!-- window title: user@host:path -->
	<span class="flex min-w-0 items-center gap-0 truncate">
		<span class="text-prompt">{profile.host}</span>
		<span class="text-fg-dim">:</span>
		<span class="truncate text-path">{path}</span>
	</span>
</header>
