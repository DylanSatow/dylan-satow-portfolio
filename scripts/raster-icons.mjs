import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const svg = readFileSync('static/favicon.svg');
await sharp(svg, { density: 384 }).resize(180, 180).png().toFile('static/apple-touch-icon.png');
await sharp(svg, { density: 384 }).resize(48, 48).png().toFile('static/favicon.png');
console.log('icons written');
