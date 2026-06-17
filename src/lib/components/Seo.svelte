<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		title: string;
		description: string;
		/** Absolute or root-relative image path. Defaults to the site card. */
		image?: string;
		type?: 'website' | 'article';
		noindex?: boolean;
		/** Article-only metadata. */
		publishedTime?: string; // ISO date
		modifiedTime?: string; // ISO date
		tags?: string[];
	}
	let {
		title,
		description,
		image = '/og.png',
		type = 'website',
		noindex = false,
		publishedTime,
		modifiedTime,
		tags = []
	}: Props = $props();

	const SITE = 'https://dylansatow.com';
	const AUTHOR = 'Dylan Satow';
	let url = $derived(SITE + page.url.pathname);
	let img = $derived(image.startsWith('http') ? image : SITE + image);

	// BlogPosting structured data for article pages → richer Google results.
	let articleLd = $derived(
		type === 'article'
			? JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BlogPosting',
					headline: title,
					description,
					image: img,
					url,
					datePublished: publishedTime,
					dateModified: modifiedTime ?? publishedTime,
					keywords: tags.join(', ') || undefined,
					author: { '@type': 'Person', name: AUTHOR, url: SITE },
					publisher: { '@type': 'Person', name: AUTHOR, url: SITE },
					mainEntityOfPage: { '@type': 'WebPage', '@id': url }
				})
			: ''
	);
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

	<!-- Article metadata -->
	{#if type === 'article'}
		{#if publishedTime}<meta property="article:published_time" content={publishedTime} />{/if}
		<meta property="article:modified_time" content={modifiedTime ?? publishedTime} />
		<meta property="article:author" content={AUTHOR} />
		{#each tags as tag}<meta property="article:tag" content={tag} />{/each}
		{@html `<script type="application/ld+json">${articleLd}</script>`}
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={img} />
	<meta name="twitter:creator" content="@dylansatow" />
</svelte:head>
