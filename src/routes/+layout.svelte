<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import WindowFrame from '$lib/components/WindowFrame.svelte';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	// Navigation is instant — like a terminal repaint. Client-side routing keeps
	// it fast; no view transition (avoids snapshot bleed over the pinned bars).

	let { children } = $props();
</script>

<WindowFrame>
	{@render children()}
</WindowFrame>
