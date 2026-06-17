// Primary sections, in keyboard (h/l) order. `dir` is what renders in the
// `$ ls` nav; `path` is the real route.
export interface NavItem {
	dir: string;
	path: string;
}

export const sections: NavItem[] = [
	{ dir: 'about/', path: '/' },
	{ dir: 'experience/', path: '/experience' },
	{ dir: 'projects/', path: '/projects' },
	{ dir: 'blog/', path: '/blog' },
	{ dir: 'music/', path: '/music' }
];

/** Resolve the active section index from a pathname (blog posts count as blog). */
export function activeIndex(pathname: string): number {
	if (pathname === '/') return 0;
	const i = sections.findIndex((s) => s.path !== '/' && pathname.startsWith(s.path));
	return i === -1 ? 0 : i;
}

/** Pretty shell path for the title/status bars, e.g. "~/portfolio/projects". */
export function shellPath(pathname: string): string {
	if (pathname === '/') return '~/portfolio';
	return '~/portfolio' + pathname;
}
