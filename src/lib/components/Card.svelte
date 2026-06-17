<script lang="ts">
	interface Props {
		title: string;
		meta?: string;
		description?: string;
		tech?: string;
		/** If set, the whole card becomes a link. */
		href?: string;
		/** Open in a new tab (external links). */
		external?: boolean;
		/** Index used by keyboard (j/k) focus navigation. */
		index?: number;
	}
	let { title, meta, description, tech, href, external, index }: Props = $props();

	const base =
		'group block border-l-2 border-accent pl-4 py-1 transition-colors duration-150';
	const interactive =
		'hover:bg-surface focus-visible:bg-surface motion-safe:hover:translate-x-0.5 transition';
</script>

{#if href}
	<a
		{href}
		data-nav-item
		data-nav-index={index}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
		class="{base} {interactive}"
	>
		<span class="font-medium text-accent group-hover:underline">
			{title}<span class="ml-1 text-fg-dim transition-colors group-hover:text-accent"
				>{external ? '↗' : '→'}</span
			>
		</span>
		{#if meta}<div class="mt-0.5 text-sm text-fg-muted">{meta}</div>{/if}
		{#if description}<p class="mt-1 text-fg">{description}</p>{/if}
		{#if tech}<div class="mt-1 text-sm text-fg-dim">{tech}</div>{/if}
	</a>
{:else}
	<article class={base}>
		<div class="font-medium text-fg">{title}</div>
		{#if meta}<div class="mt-0.5 text-sm text-fg-muted">{meta}</div>{/if}
		{#if description}<p class="mt-1 text-fg">{description}</p>{/if}
		{#if tech}<div class="mt-1 text-sm text-fg-dim">{tech}</div>{/if}
	</article>
{/if}
