<script lang="ts">
	import { onMount } from 'svelte';

	// Initialized from the class the no-flash script already set on <html>.
	let light = $state(false);

	onMount(() => {
		light = document.documentElement.classList.contains('light');
	});

	function toggle() {
		light = !light;
		const el = document.documentElement;
		el.classList.toggle('light', light);
		el.classList.toggle('dark', !light);
		try {
			localStorage.setItem('theme', light ? 'light' : 'dark');
		} catch (e) {
			/* private mode — fine, just won't persist */
		}
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute('content', light ? '#dce0e8' : '#11111b');
	}
</script>

<button
	type="button"
	onclick={toggle}
	aria-pressed={light}
	aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
	title="Toggle theme"
	class="flex h-7 w-7 items-center justify-center text-fg-muted transition-colors hover:text-accent active:text-accent"
>
	{#if light}
		<!-- moon (offer dark) -->
		<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	{:else}
		<!-- sun (offer light) -->
		<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
		</svg>
	{/if}
</button>
