import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { blogPosts } from '$lib/data';

// All markdown posts, lazily importable by slug.
const modules = import.meta.glob('../../../lib/posts/*.md');

// Prerender one static page per known post.
export const entries: EntryGenerator = () => blogPosts.map((p) => ({ slug: p.slug }));

export const load: PageLoad = async ({ params }) => {
	const loader = modules[`../../../lib/posts/${params.slug}.md`];
	if (!loader) throw error(404, `Post not found: ${params.slug}`);

	const post = (await loader()) as {
		default: unknown;
		metadata: { title: string; date: string; description?: string };
	};

	return { content: post.default, meta: post.metadata, slug: params.slug };
};
