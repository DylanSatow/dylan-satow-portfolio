<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import TopBar from './TopBar.svelte';
	import StatusBar from './StatusBar.svelte';
	import SectionNav from './SectionNav.svelte';
	import KeyboardShortcuts from './KeyboardShortcuts.svelte';

	let { children } = $props();
	let pathname = $derived(page.url.pathname);

	// Content scrolls inside <main>, not the window, so SvelteKit's scroll reset
	// doesn't reach it. Reset it ourselves so every section opens at the top
	// (otherwise you'd land mid-page after switching while scrolled — esp. mobile).
	afterNavigate(() => {
		document.getElementById('content')?.scrollTo({ top: 0 });
	});
</script>

<KeyboardShortcuts />

<a
	href="#content"
	class="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:font-semibold focus:text-on-accent"
>
	Skip to content
</a>

<div class="app-shell flex h-[100dvh] flex-col bg-backdrop">
	<div
		class="flex min-h-0 flex-1 flex-col border-2 border-frame/70 bg-window transition-colors duration-300 focus-within:border-frame"
	>
		<TopBar {pathname} />

		<main
			id="content"
			tabindex="-1"
			class="flex-1 overflow-y-auto overscroll-contain p-4 outline-none sm:p-6 md:p-8"
		>
			<!-- Left-anchored like a real shell (not centered) so prompts start at
			     the window's left edge on wide screens. max-width caps the measure. -->
			<div class="max-w-3xl">
				<SectionNav {pathname} />
				{@render children()}
			</div>
		</main>

		<StatusBar {pathname} />
	</div>
</div>
