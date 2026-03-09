# Portfolio - Constanza Palacios

Portfolio profesional para modelo comercial y de pasarela. Desarrollado con [Astro](https://astro.build).

## Descargar fotos de Canva automáticamente

```bash
npm install puppeteer
node scripts/download-canva-images.js
```

El script abre la página de Canva, extrae las imágenes y las guarda en `public/images/`. Luego actualiza las rutas en `src/data/portfolio.ts`.

## Cómo usar tus fotos de Canva (manual)

1. Ve a [portafolioconstanzapalacios.my.canva.site](https://portafolioconstanzapalacios.my.canva.site/)
2. Haz clic derecho en cada foto → "Guardar imagen como..."
3. Guarda las imágenes en `public/images/` con estos nombres:
   - `ponte-guapa.jpg` - Sesión Ponte Guapa
   - `pasarelas.jpg` - Pasarelas y colaboraciones
   - `angelica-meza.jpg` - Angélica Meza Atelier
   - `lez-vestidos.jpg` - Lez Vestidos
   - `rodriguez-moreno.jpg` - Rodríguez Moreno
   - `ponte-guapa-gala.jpg` - Ponte Guapa (traje de gala)

4. Actualiza `src/data/portfolio.ts` para usar las rutas locales (`/images/nombre.jpg`) en lugar de las URLs de Unsplash.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

## Build

```bash
npm run build
```

Los archivos estáticos se generan en `dist/`.

## Preview

```bash
npm run preview
```
