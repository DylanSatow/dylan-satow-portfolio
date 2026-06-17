import sharp from 'sharp';
import { readFileSync, readdirSync, mkdirSync } from 'node:fs';

// Generate a per-post social card (post title on the terminal window) for every
// markdown file in src/lib/posts. Output: static/og/<slug>.png (1200x630).

const fontB64 = readFileSync('static/fonts/jetbrains-mono-latin.woff2').toString('base64');

const C = {
	crust: '#11111b',
	base: '#1e1e2e',
	mantle: '#181825',
	border: '#b4befe',
	lavender: '#b4befe',
	mauve: '#cba6f7',
	green: '#a6e3a1',
	blue: '#89b4fa',
	text: '#cdd6f4',
	sub: '#a6adc8',
	overlay: '#9399b2'
};

function escapeXml(s) {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function wrap(text, maxChars) {
	const words = text.split(/\s+/);
	const lines = [];
	let cur = '';
	for (const w of words) {
		if (!cur) cur = w;
		else if ((cur + ' ' + w).length <= maxChars) cur += ' ' + w;
		else {
			lines.push(cur);
			cur = w;
		}
	}
	if (cur) lines.push(cur);
	return lines;
}

function frontmatterTitle(raw, fallback) {
	const fm = raw.match(/^---\n([\s\S]*?)\n---/);
	const m = fm && fm[1].match(/^title:\s*(.+)$/m);
	return m ? m[1].trim().replace(/^["']|["']$/g, '') : fallback;
}

function card(slug, title) {
	const len = title.length;
	const [fs, maxChars] = len <= 24 ? [76, 22] : len <= 48 ? [58, 30] : [46, 40];
	const lines = wrap(escapeXml(title), maxChars).slice(0, 4);
	const lineH = Math.round(fs * 1.14);
	const startY = 300 - ((lines.length - 1) * lineH) / 2 + 20;
	const titleTspans = lines
		.map((l, i) => `<tspan x="78" dy="${i === 0 ? 0 : lineH}">${l}</tspan>`)
		.join('');

	return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><style>
    @font-face { font-family: 'JetBrains Mono'; src: url('data:font/woff2;base64,${fontB64}') format('woff2'); font-weight: 100 800; }
    text { font-family: 'JetBrains Mono', monospace; }
  </style></defs>
  <rect width="1200" height="630" fill="${C.crust}"/>
  <rect x="48" y="48" width="1104" height="534" fill="${C.base}" stroke="${C.border}" stroke-width="4"/>
  <rect x="50" y="50" width="1100" height="54" fill="${C.mantle}"/>
  <text x="74" y="86" font-size="24" font-weight="600">
    <tspan fill="${C.mauve}">[1]</tspan><tspan fill="${C.green}">  dylan@satow</tspan><tspan fill="${C.sub}">:</tspan><tspan fill="${C.blue}">~/portfolio/blog/${escapeXml(slug)}</tspan>
  </text>
  <text x="74" y="200" font-size="28"><tspan fill="${C.green}">$</tspan><tspan fill="${C.text}"> cat blog/${escapeXml(slug)}.md</tspan></text>
  <text y="${startY}" font-size="${fs}" font-weight="700" fill="${C.lavender}">${titleTspans}</text>
  <rect x="50" y="528" width="1100" height="52" fill="${C.mantle}"/>
  <rect x="50" y="528" width="120" height="52" fill="${C.lavender}"/>
  <text x="74" y="561" font-size="22" font-weight="600" fill="${C.crust}">NORMAL</text>
  <text x="1126" y="561" font-size="22" fill="${C.blue}" text-anchor="end">dylansatow.com/blog</text>
</svg>`;
}

mkdirSync('static/og', { recursive: true });
const files = readdirSync('src/lib/posts').filter((f) => f.endsWith('.md'));
for (const file of files) {
	const slug = file.replace(/\.md$/, '');
	const raw = readFileSync(`src/lib/posts/${file}`, 'utf-8');
	const title = frontmatterTitle(raw, slug);
	const svg = card(slug, title);
	await sharp(Buffer.from(svg), { density: 144 })
		.resize(1200, 630)
		.png({ compressionLevel: 9 })
		.toFile(`static/og/${slug}.png`);
	console.log(`og/${slug}.png  ←  "${title}"`);
}
