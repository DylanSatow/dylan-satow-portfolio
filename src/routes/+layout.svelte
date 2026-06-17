<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import WindowFrame from '$lib/components/WindowFrame.svelte';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	// Native cross-document-style view transitions between routes.
	// No-ops where unsupported or when the user prefers reduced motion.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();
</script>

<WindowFrame>
	{@render children()}
</WindowFrame>
