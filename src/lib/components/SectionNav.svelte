<script lang="ts">
	import { sections, activeIndex } from '$lib/nav';

	let { pathname }: { pathname: string } = $props();
	let active = $derived(activeIndex(pathname));
</script>

<nav aria-label="Sections" class="mb-6 sm:mb-8">
	<div class="text-sm">
		<span class="text-prompt">$</span>
		<span class="ml-2 text-command">ls</span>
	</div>
	<ul class="mt-2 flex flex-wrap gap-x-4 gap-y-1 sm:gap-x-5">
		{#each sections as item, i}
			<li>
				<a
					href={item.path}
					data-nav-index={i}
					aria-current={i === active ? 'page' : undefined}
					class="flex min-h-[44px] items-center px-1 transition-colors
						{i === active
						? 'font-semibold text-accent'
						: 'text-path hover:text-accent hover:underline'}"
				>
					{#if i === active}<span aria-hidden="true" class="text-fg-dim">[</span>{/if}{item.dir}{#if i === active}<span
							aria-hidden="true"
							class="text-fg-dim">]</span
						>{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
