# Sorpresa para Andreína

Experiencia web de una sola página para celebrar los 34 años de Andreína. Se recorre con el scroll vertical nativo e incluye escáner de huellas, revelación, contador, razones, galería, recuerdos, carta, canción, pastel y cierre final.

Los enlaces de anterior/siguiente usan anclas internas con desplazamiento suave. Las secciones permanecen en el documento y se pueden recorrer en cualquier orden; el escáner ofrece una transición directa a la revelación, pero no bloquea el desplazamiento.

## Ejecutar localmente

1. Abre la carpeta en VS Code.
2. Activa Live Server o sirve la carpeta localmente.
3. Entra a la raíz del proyecto con tu navegador.

Alternativa manual:

```bash
cd /home/bryan/Documentos/andreina-birthday
python3 -m http.server 8000
```

Luego abre:

```
http://localhost:8000
```

## Personalizar la experiencia

Toda la información editable se encuentra en:

- `js/config.js`

Puedes modificar:

- nombre del destinatario y del remitente
- fecha del cumpleaños y edad
- mensajes principales
- efecto de pétalos (`petals.enabled`, colores, densidad y comportamiento por escena)
- lista de razones
- galería de imágenes
- carta de amor
- musica y rutas de audio
- estados de la experiencia

La lluvia romántica de pétalos se adapta al escáner, revelación, galería, carta, pastel y pantalla final. Se puede desactivar poniendo `petals.enabled` en `false`; también se desactiva automáticamente si el navegador tiene activada la preferencia de movimiento reducido.

## Estructura principal

- `index.html` — estructura de la experiencia
- `css/` — estilos y responsive
- `js/` — módulos de lógica
- `assets/` — imágenes y audio

## Nota

La página usa archivos estáticos y no requiere backend.
