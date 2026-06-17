import { posts } from '$lib/posts';

export const prerender = true;

const SITE = 'https://dylansatow.com';

function escape(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

// ISO date → RFC-822 (required by RSS). Noon UTC avoids timezone date-shifting.
function rfc822(iso: string): string {
	const full = iso.length === 7 ? `${iso}-01` : iso;
	return new Date(`${full}T12:00:00Z`).toUTCString();
}

export function GET() {
	const items = posts
		.map(
			(p) => `\t\t<item>
			<title>${escape(p.title)}</title>
			<link>${SITE}/blog/${p.slug}</link>
			<guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
			<pubDate>${rfc822(p.date)}</pubDate>
			${p.description ? `<description>${escape(p.description)}</description>` : ''}
			${p.tags.map((t) => `<category>${escape(t)}</category>`).join('')}
		</item>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Dylan Satow — Blog</title>
		<link>${SITE}/blog</link>
		<atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
		<description>Writing by Dylan Satow on software engineering, distributed systems, ML, and tooling.</description>
		<language>en-us</language>
${items}
	</channel>
</rss>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
