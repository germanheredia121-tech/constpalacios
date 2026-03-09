/**
 * Script para descargar imágenes del portfolio de Canva.
 * Requiere: npm install puppeteer
 * Uso: node scripts/download-canva-images.js
 *
 * Abre la página de Canva, espera a que cargue, extrae las URLs de las imágenes
 * y las descarga en public/images/
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CANVA_URL = 'https://portafolioconstanzapalacios.my.canva.site/';
const OUTPUT_DIR = path.join(__dirname, '../public/images');

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(path.join(OUTPUT_DIR, filename));
    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        const redirectUrl = response.headers.location;
        return downloadImage(redirectUrl, filename).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`  ✓ ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(OUTPUT_DIR, filename), () => {});
      reject(err);
    });
  });
}

async function main() {
  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch (e) {
    console.log('Instala puppeteer primero: npm install puppeteer');
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('Abriendo Canva...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(CANVA_URL, { waitUntil: 'networkidle2', timeout: 30000 });

  const imageUrls = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img[src]'));
    return imgs
      .map(img => img.src)
      .filter(src => src && !src.startsWith('data:') && src.includes('http'));
  });

  const uniqueUrls = [...new Set(imageUrls)];
  console.log(`Encontradas ${uniqueUrls.length} imágenes\n`);

  for (let i = 0; i < uniqueUrls.length; i++) {
    const url = uniqueUrls[i];
    const ext = url.includes('.png') ? 'png' : 'jpg';
    const filename = `canva-${i + 1}.${ext}`;
    try {
      await downloadImage(url, filename);
    } catch (err) {
      console.log(`  ✗ Error: ${filename}`, err.message);
    }
  }

  await browser.close();
  console.log('\nListo. Actualiza src/data/portfolio.ts con las rutas /images/canva-N.jpg');
}

main().catch(console.error);
