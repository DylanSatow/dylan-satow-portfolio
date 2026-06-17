import sharp from 'sharp';
import { readFileSync } from 'node:fs';

// Embed the subset JetBrains Mono so the card renders with the real typeface
// where the SVG rasterizer supports @font-face; otherwise it falls back to a
// system monospace, which still looks on-brand.
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

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face {
        font-family: 'JetBrains Mono';
        src: url('data:font/woff2;base64,${fontB64}') format('woff2');
        font-weight: 100 800;
      }
      text { font-family: 'JetBrains Mono', monospace; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="${C.crust}"/>

  <!-- window -->
  <rect x="48" y="48" width="1104" height="534" fill="${C.base}" stroke="${C.border}" stroke-width="4"/>

  <!-- top bar -->
  <rect x="50" y="50" width="1100" height="54" fill="${C.mantle}"/>
  <text x="74" y="86" font-size="24" font-weight="600">
    <tspan fill="${C.mauve}">[1]</tspan><tspan fill="${C.green}">  dylan@satow</tspan><tspan fill="${C.sub}">:</tspan><tspan fill="${C.blue}">~/portfolio</tspan>
  </text>

  <!-- body -->
  <text x="74" y="232" font-size="30"><tspan fill="${C.green}">$</tspan><tspan fill="${C.text}"> whoami</tspan></text>
  <text x="74" y="336" font-size="94" font-weight="700" fill="${C.lavender}">Dylan Satow</text>
  <rect x="690" y="266" width="26" height="74" fill="${C.lavender}"/>
  <text x="78" y="404" font-size="36" fill="${C.sub}">Software Engineer @ AWS</text>
  <text x="78" y="456" font-size="28" fill="${C.overlay}">distributed systems &#183; ML research &#183; jazz trumpet</text>

  <!-- status bar -->
  <rect x="50" y="528" width="1100" height="52" fill="${C.mantle}"/>
  <rect x="50" y="528" width="120" height="52" fill="${C.lavender}"/>
  <text x="74" y="561" font-size="22" font-weight="600" fill="${C.crust}">NORMAL</text>
  <text x="1126" y="561" font-size="22" fill="${C.blue}" text-anchor="end">dylansatow.com</text>
</svg>`;

await sharp(Buffer.from(svg), { density: 144 })
	.resize(1200, 630)
	.png({ compressionLevel: 9 })
	.toFile('static/og.png');
console.log('og.png written');
