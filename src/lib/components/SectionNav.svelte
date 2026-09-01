<script lang="ts">
	import { sections, activeIndex } from '$lib/nav';

	let { pathname }: { pathname: string } = $props();
	let active = $derived(activeIndex(pathname));
</script>

<nav aria-label="Sections" class="mb-6 sm:mb-8">
	<div class="text-sm">
		<span class="text-prompt">$</span>
		<span class="ml-2 text-command cursor-block">ls</span>
	</div>
	<!-- Wraps like real `ls` output in a narrow terminal: every section is
	     always visible, no hidden overflow. Item widths are fixed (brackets
	     always rendered), so wrap points never shift on tap. -->
	<ul class="mt-2 flex flex-wrap gap-x-4 sm:gap-x-5">
		{#each sections as item, i}
			<li class="shrink-0">
				<a
					href={item.path}
					data-nav-index={i}
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
