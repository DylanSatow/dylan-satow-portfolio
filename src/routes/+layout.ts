// Static portfolio — prerender every route to plain HTML at build time.
// Served from Vercel's CDN (no serverless functions), instant TTFB, works
// with JavaScript disabled. Client router enhances nav after hydration.
export const prerender = true;
