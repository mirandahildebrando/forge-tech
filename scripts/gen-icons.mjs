// Gera todos os ícones do site a partir de scripts/icon-src.svg
// Uso: node scripts/gen-icons.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const svg = await readFile(path.join(root, "scripts", "icon-src.svg"));

const render = (size, opts = {}) =>
  sharp(svg, { density: Math.max(72, (size / 64) * 72) })
    .resize(size, size)
    .png(opts)
    .toBuffer();

const app = path.join(root, "app");
const pub = path.join(root, "public");

// SVG vetorial (navegadores modernos preferem; os demais caem no PNG/ICO)
await writeFile(path.join(app, "icon.svg"), svg);

// PNGs (Next.js serve app/icon.* e app/apple-icon.* com a tag certa)
await writeFile(path.join(app, "icon.png"), await render(512, { compressionLevel: 9 }));
await writeFile(path.join(app, "apple-icon.png"), await render(180));
await writeFile(path.join(pub, "favicon-32.png"), await render(32));
await writeFile(path.join(pub, "favicon-16.png"), await render(16));
await writeFile(path.join(pub, "icon-512.png"), await render(512, { compressionLevel: 9 }));

// favicon.ico com 16 + 32 + 48 (formato ICO com payload PNG, suportado desde o Vista)
const sizes = [16, 32, 48];
const blobs = await Promise.all(sizes.map((s) => render(s, { compressionLevel: 9 })));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);
const entries = [];
let offset = 6 + 16 * sizes.length;
for (let i = 0; i < sizes.length; i++) {
  const e = Buffer.alloc(16);
  e[0] = sizes[i] === 48 ? 48 : sizes[i]; // width (0 = 256)
  e[1] = sizes[i] === 48 ? 48 : sizes[i]; // height
  e[2] = 0; // palette
  e[3] = 0; // reserved
  e.writeUInt16LE(1, 4); // planes
  e.writeUInt16LE(32, 6); // bpp
  e.writeUInt32LE(blobs[i].length, 8);
  e.writeUInt32LE(offset, 12);
  entries.push(e);
  offset += blobs[i].length;
}
await writeFile(path.join(app, "favicon.ico"), Buffer.concat([header, ...entries, ...blobs]));

console.log("OK: app/favicon.ico, app/icon.png, app/apple-icon.png, public/favicon-*.png");
