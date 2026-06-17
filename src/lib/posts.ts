// Single source of truth for blog posts — derived from the Markdown files in
// ./posts so frontmatter is the only place you edit. Used by the blog index,
// the [slug] route, the sitemap, and the RSS feed.

export interface PostMeta {
	slug: string;
	title: string;
	date: string; // ISO (YYYY-MM-DD or YYYY-MM)
	description?: string;
	tags: string[];
	readingMinutes: number;
}

// Frontmatter (compiled by mdsvex) + raw source (for word count / reading time).
const metaModules = import.meta.glob('./posts/*.md', { eager: true });
const rawModules = import.meta.glob('./posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

function slugFromPath(path: string): string {
	return path.split('/').pop()!.replace(/\.md$/, '');
}

function readingMinutes(raw: string): number {
	const body = raw.replace(/^---[\s\S]*?---/, ''); // strip frontmatter
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

export const posts: PostMeta[] = Object.entries(metaModules)
	.map(([path, mod]) => {
		const meta = (mod as { metadata: Record<string, unknown> }).metadata;
		return {
			slug: slugFromPath(path),
			title: String(meta.title ?? slugFromPath(path)),
			// Normalize to YYYY-MM-DD: YAML may coerce an unquoted date to a full
			// ISO timestamp; slicing keeps formatDate/RSS/sitemap consistent.
			date: String(meta.date ?? '').slice(0, 10),
			description: meta.description ? String(meta.description) : undefined,
			tags: Array.isArray(meta.tags) ? (meta.tags as string[]) : [],
			readingMinutes: readingMinutes(rawModules[path] as string)
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date));

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Human date, timezone-safe (parsed from parts, not Date()). */
export function formatDate(iso: string): string {
	const [y, m, d] = iso.split('-');
	if (!m) return y;
	if (!d) return `${MONTHS[+m - 1]} ${y}`;
	return `${MONTHS[+m - 1]} ${+d}, ${y}`;
}

export function getPost(slug: string): PostMeta | undefined {
	return posts.find((p) => p.slug === slug);
}
