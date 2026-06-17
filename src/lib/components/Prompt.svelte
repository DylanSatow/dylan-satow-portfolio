<script lang="ts">
	interface Props {
		/** The command text after the `$`. */
		command: string;
		/** Render as a heading (h1/h2) for document outline + screen readers. */
		heading?: 1 | 2;
		/** Show a blinking block cursor at the end. */
		cursor?: boolean;
		class?: string;
	}
	let { command, heading, cursor = false, class: klass = '' }: Props = $props();
</script>

{#snippet line()}
	<span class="text-prompt select-none">$</span>
	<span class="ml-2 text-command {cursor ? 'cursor-block' : ''}">{command}</span>
{/snippet}

{#if heading === 1}
	<h1 class="text-sm font-normal {klass}">{@render line()}</h1>
{:else if heading === 2}
	<h2 class="text-sm font-normal {klass}">{@render line()}</h2>
{:else}
	<div class="text-sm {klass}">{@render line()}</div>
{/if}
