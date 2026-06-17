<script lang="ts">
	import { page } from '$app/state';
	import TopBar from './TopBar.svelte';
	import StatusBar from './StatusBar.svelte';
	import SectionNav from './SectionNav.svelte';
	import KeyboardShortcuts from './KeyboardShortcuts.svelte';

	let { children } = $props();
	let pathname = $derived(page.url.pathname);
</script>

<KeyboardShortcuts />

<a
	href="#content"
	class="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:font-semibold focus:text-window"
>
	Skip to content
</a>

<div class="flex h-[100dvh] flex-col bg-backdrop p-0 sm:p-3 lg:p-4">
	<div
		class="flex min-h-0 flex-1 flex-col border-2 border-frame/70 bg-window transition-colors duration-300 focus-within:border-frame"
	>
		<TopBar {pathname} />

		<main
			id="content"
			tabindex="-1"
			class="flex-1 overflow-y-auto overscroll-contain p-4 outline-none sm:p-6 md:p-8"
		>
			<div class="mx-auto max-w-3xl">
				<SectionNav {pathname} />
				<!-- Only this region animates between routes; the frame, bars, and
				     nav above stay put so navigation doesn't flicker the whole window. -->
				<div class="route-content">
					{@render children()}
				</div>
			</div>
		</main>

		<StatusBar {pathname} />
	</div>
</div>
