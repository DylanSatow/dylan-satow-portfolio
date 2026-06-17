import { sections } from '$lib/nav';
import { blogPosts } from '$lib/data';

export const prerender = true;

const SITE = 'https://dylansatow.com';

export function GET() {
	const paths = [
		...sections.map((s) => s.path),
		...blogPosts.map((p) => `/blog/${p.slug}`)
	];

	const urls = paths
		.map(
			(path) =>
				`\t<url><loc>${SITE}${path === '/' ? '' : path}</loc><changefreq>monthly</changefreq></url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
