<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		title: string;
		description: string;
		/** Absolute or root-relative image path. Defaults to the site card. */
		image?: string;
		type?: 'website' | 'article';
		noindex?: boolean;
	}
	let { title, description, image = '/og.png', type = 'website', noindex = false }: Props = $props();

	const SITE = 'https://dylansatow.com';
	let url = $derived(SITE + page.url.pathname);
	let img = $derived(image.startsWith('http') ? image : SITE + image);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	{#if noindex}<meta name="robots" content="noindex" />{/if}

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={img} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Dylan Satow" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={img} />
	<meta name="twitter:creator" content="@dylansatow" />
</svelte:head>
