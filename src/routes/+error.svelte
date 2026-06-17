<script lang="ts">
	import { page } from '$app/state';
	import Prompt from '$lib/components/Prompt.svelte';

	let status = $derived(page.status);
	let attempted = $derived(page.url.pathname);
</script>

<svelte:head>
	<title>{status} — Dylan Satow</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="space-y-4">
	<Prompt heading={1} command="cd {attempted}" />
	<div class="border-l-2 border-error pl-4">
		{#if status === 404}
			<p class="text-error">bash: cd: {attempted}: No such file or directory</p>
		{:else}
			<p class="text-error">
				bash: {status}: {page.error?.message ?? 'Something went wrong'}
			</p>
		{/if}
	</div>
	<p class="text-fg-muted">
		Try <a
			href="/"
			class="text-accent underline decoration-from-font underline-offset-2 hover:decoration-2"
			>cd ~/portfolio</a
		> to get back home.
	</p>
</section>
