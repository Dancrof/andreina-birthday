# Una sorpresa para Andreína

Página estática de una sola columna vertical, pensada como regalo de cumpleaños. No necesita backend ni frameworks.

## Cómo verla

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8080
```

Abre `http://localhost:8080` en el navegador. También puedes abrir `index.html` directamente, aunque el audio y algunas rutas funcionan mejor con un servidor local.

## Estructura

- `index.html` — marcado semántico de toda la experiencia
- `css/styles.css` — diseño, animaciones y versión móvil
- `js/main.js` — configuración y comportamiento
- `assets/images/` — fotografías
- `assets/audio/cancion.mp3` — música de fondo (añade el archivo)

## Personalizar

Edita el objeto `CONFIG` al inicio de `js/main.js`:

| Campo | Uso |
| --- | --- |
| `recipientName`, `age`, `birthdayISO` | Nombre, edad y fecha del cumpleaños |
| `relationshipStart` | Fecha real de inicio de la relación (`YYYY-MM-DD`) |
| `relationshipStartIsExample` | Pásalo a `false` cuando la fecha ya no sea de ejemplo |
| `welcomeParagraphs` | Texto de la sección de cumpleaños |
| `letter` | Dedicatoria de la carta |
| `timeline` | Recuerdos (fecha, título, descripción, imagen opcional) |
| `gallery` | Rutas y pies de foto |
| `musicSrc` | Ruta del audio |
| `colors` | Paleta |

La fecha `relationshipStart` actual es **un ejemplo**. Sustitúyela antes de publicar.

Los cinco hitos de la línea del tiempo también son ejemplos. Cámbialos por recuerdos auténticos.

## Fotografías

La galería tiene seis posiciones en `CONFIG.gallery`:

- Posiciones 1 a 3: usan las fotos reales que ya están en `assets/images/` (`IMG-20251213-WA0054.jpg`, `IMG-20260101-WA0030.jpg`, `IMG-20260101-WA0031.jpg`), sin pie de foto. Escribe uno en `caption` si quieres.
- Posiciones 4 a 6: apuntan a `assets/images/foto-4.jpg`, `foto-5.jpg` y `foto-6.jpg`. Mientras esos archivos no existan se muestra `placeholder-foto.svg`. Añade las fotos (o cambia las rutas) y reemplaza los pies de foto de ejemplo antes de compartir.

Si un archivo no existe, se muestra `placeholder-foto.svg`. Actualiza también los textos `alt`.

## Música

Añade `assets/audio/cancion.mp3` o cambia `musicSrc`. El navegador no reproducirá sonido hasta que haya una interacción (el lector de huella, el botón de música o el aviso posterior al desbloqueo). Si el archivo falta, la página sigue funcionando.

## Lector de huella

Es una **simulación visual**. No usa biometría del dispositivo ni guarda huellas. Hay que mantener pulsado unos 2,5 segundos; si se suelta antes, el progreso se reinicia. El desbloqueo se recuerda en `localStorage` solo como detalle opcional en el mismo aparato.

## Publicar

Sube la carpeta completa (HTML, CSS, JS y `assets`) a cualquier alojamiento estático: GitHub Pages, Netlify, un servidor propio, etc.
