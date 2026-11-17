# Polleria DON TOMY — Landing page

Vite + React + Tailwind CSS (v3). Íconos: `lucide-react` (y `react-icons` solo para logos de marcas: WhatsApp, Facebook, Instagram, TikTok, que Lucide no incluye).

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo
npm run build    # compila a /dist
npm run preview  # prueba el build
```

## Estructura

```
src/
├── assets/       Imágenes locales (placeholders con el mismo nombre que tu foto real)
├── components/   Piezas reutilizables (Logo, NavBar, WhatsAppButton, GoldButton, Feature, SpecialtyCard...)
├── data/         TODOS los textos, teléfono, horarios, links y listas (site.js, hero.js, specialties.js...)
├── hooks/        useActiveSection (resalta el link del menú según la sección visible)
├── sections/     Header, Hero, Concept, Specialties, Delivery, Location, Footer
├── utils/        whatsapp.js (arma el link de WhatsApp con mensaje)
├── App.jsx       Solo ordena las secciones
└── main.jsx      Entrada + fuentes + estilos
public/           favicon.svg y og-image.jpg
```

## Imágenes a reemplazar (mismo nombre, en `src/assets/`)

`hero.jpg`, `concept-wok.jpg`, `concept-pollo.jpg`, `dish-pollo.jpg`, `dish-lomo.jpg`, `dish-arroz.jpg`, `dish-aeropuerto.jpg`, `dish-tallarines.jpg`, `delivery.jpg`, `map.jpg`.
Además `public/og-image.jpg` (1200x630, para compartir el link).

## Pendientes antes de publicar

- [ ] Reemplazar todas las imágenes placeholder por fotos reales (hero, platos, repartidor, mapa).
- [ ] Confirmar textos poco legibles en el diseño: tarjeta "Pollo a la brasa" (título y descripción) en `src/data/specialties.js`.
- [ ] Confirmar número de WhatsApp (929 082 514) y el mensaje prellenado en `src/data/site.js`.
- [ ] Botón "Ver todas nuestras especialidades": hoy abre WhatsApp; conectar a la carta (PDF o página) en `src/data/specialties.js`.
- [ ] Reemplazar los links de redes sociales (hoy apuntan a la home de cada red) en `src/data/footer.js`.
- [ ] Mapa: cambiar el placeholder por captura real o un iframe de Google Maps, y ajustar `mapsUrl` en `src/data/site.js`.
- [ ] Open Graph: poner la URL absoluta de `og-image.jpg` en `index.html` cuando tengas dominio.
- [ ] Confirmar "Más de 10 años de experiencia" y el horario.
- [ ] El copyright usa el año actual automáticamente (el diseño dice 2024).
