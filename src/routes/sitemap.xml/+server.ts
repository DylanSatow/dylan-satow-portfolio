import { sections } from '$lib/nav';
import { posts } from '$lib/posts';

export const prerender = true;

const SITE = 'https://dylansatow.com';

function url(path: string, lastmod?: string): string {
	const loc = `${SITE}${path === '/' ? '' : path}`;
	return `\t<url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}<changefreq>monthly</changefreq></url>`;
}

export function GET() {
	const urls = [
		...sections.map((s) => url(s.path)),
		...posts.map((p) => url(`/blog/${p.slug}`, p.date))
	].join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
