<script lang="ts">
	import { sections, activeIndex } from '$lib/nav';
	import { afterNavigate } from '$app/navigation';
	import { tick } from 'svelte';

	let { pathname }: { pathname: string } = $props();
	let active = $derived(activeIndex(pathname));

	let links = $state<HTMLAnchorElement[]>([]);

	// The row scrolls horizontally instead of wrapping, so the current section
	// can sit off-screen on a narrow phone. Pull it into view after each nav.
	// Instant (no smooth) to match the "terminal repaint" feel and avoid jank.
	afterNavigate(async () => {
		await tick();
		links[active]?.scrollIntoView({ block: 'nearest', inline: 'center' });
	});
</script>

<nav aria-label="Sections" class="mb-6 sm:mb-8">
	<div class="text-sm">
		<span class="text-prompt">$</span>
		<span class="ml-2 text-command cursor-block">ls</span>
	</div>
	<!-- Single scrolling line: never restacks under the thumb on tap. -->
	<ul
		class="mt-2 flex snap-x flex-nowrap gap-x-4 overflow-x-auto scroll-px-1 sm:gap-x-5
			[-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
	>
		{#each sections as item, i}
			<li class="shrink-0 snap-start">
				<a
					href={item.path}
					data-nav-index={i}
					bind:this={links[i]}
					aria-current={i === active ? 'page' : undefined}
					class="flex min-h-[44px] items-center whitespace-nowrap px-1.5 transition-colors active:text-accent
						{i === active
						? 'font-semibold text-accent'
						: 'text-path hover:text-accent hover:underline'}"
				>
					<!-- Brackets are always rendered (opacity toggled) so switching
					     tabs never changes an item's width — no reflow on tap. -->
					<span aria-hidden="true" class="text-fg-dim" class:opacity-0={i !== active}>[</span
					>{item.dir}<span aria-hidden="true" class="text-fg-dim" class:opacity-0={i !== active}
						>]</span
					>
				</a>
			</li>
		{/each}
	</ul>
</nav>
