<script lang="ts">
	import { onMount } from 'svelte';

	// Client-only to avoid SSR/hydration mismatch (server time ≠ client time).
	let time = $state('');

	function fmt() {
		const d = new Date();
		const hh = String(d.getHours()).padStart(2, '0');
		const mm = String(d.getMinutes()).padStart(2, '0');
		return `${hh}:${mm}`;
	}

	onMount(() => {
		time = fmt();
		const id = setInterval(() => (time = fmt()), 15_000);
		return () => clearInterval(id);
	});
</script>

<!-- reserve width so the bar doesn't shift when the clock fills in -->
<span class="tabular-nums" aria-hidden={!time} style="min-width: 5ch; text-align: right;">{time}</span>
