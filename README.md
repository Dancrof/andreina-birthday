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

Coloca las imágenes en `assets/images/` con estos nombres (o cambia las rutas en `CONFIG.gallery`):

- `assets/images/foto-1.jpg`
- `assets/images/foto-2.jpg`
- `assets/images/foto-3.jpg`
- `assets/images/foto-4.jpg`
- `assets/images/foto-5.jpg`
- `assets/images/foto-6.jpg`

Si un archivo no existe, se muestra `placeholder-foto.svg`. Actualiza también los pies de foto y los textos `alt`.

## Música

Añade `assets/audio/cancion.mp3` o cambia `musicSrc`. El navegador no reproducirá sonido hasta que haya una interacción (el lector de huella, el botón de música o el aviso posterior al desbloqueo). Si el archivo falta, la página sigue funcionando.

## Lector de huella

Es una **simulación visual**. No usa biometría del dispositivo ni guarda huellas. Hay que mantener pulsado unos 2,5 segundos; si se suelta antes, el progreso se reinicia. El desbloqueo se recuerda en `localStorage` solo como detalle opcional en el mismo aparato.

## Publicar

Sube la carpeta completa (HTML, CSS, JS y `assets`) a cualquier alojamiento estático: GitHub Pages, Netlify, un servidor propio, etc.
