# Coco te explica — Serie Nvidia

Paquete completo de la serie de TikTok "Coco te explica: el caso Nvidia" (noviembre de 2026).

## Videos listos (1080×1920, para TikTok, Reels y Shorts)

| Parte | Archivo                     | Tema                              | Duración | Publicar          |
|-------|-----------------------------|-----------------------------------|----------|-------------------|
| 1     | `COCO_NVIDIA_PARTE1_V2.mp4` | Cayó en 11 días y volvió          | 84.6 s   | 24 nov, 18:00–20:00 |
| 2     | `COCO_NVIDIA_PARTE2.mp4`    | La junta dijo NO… y Trump llamó   | 66 s     | 26 nov, 18:00–20:00 |
| 3     | `COCO_NVIDIA_PARTE3.mp4`    | ¿A dónde fueron los chips?        | 80 s     | 28 nov, 18:00–20:00 |
| 4     | `COCO_NVIDIA_PARTE4.mp4`    | Lo que le van a preguntar         | 66 s     | 30 nov, 18:00–20:00 |
| 5     | (pendiente)                 | Lo que dijo en el Senado          | —        | 4 dic             |

Horario: hora del centro de México.

- **Textos para publicar** (títulos, descripciones, hashtags y comentario fijado): `COCO_NVIDIA_PARTE1.md` (sección 6) y `PUBLICAR_PARTES_2_3_4.md`.
- **Créditos de las fotos** (van en la descripción): `CREDITOS_FOTOS.md`.

## Pendientes
1. **Parte 5:** después de la audiencia del Senado del 3 de diciembre (10:00 EST). Hay que investigar lo que dijo, generar la voz (~1,400 créditos de ElevenLabs) y renderizar.
2. **App de TikTok para subir videos automáticamente** (developers.tiktok.com, app "Coco Te Explica"):
   - Crear el repositorio público `coco-te-explica` en GitHub y darle acceso a la app de Claude.
   - Subir la carpeta `sitio/`, que ya incluye el archivo de verificación de TikTok, y activar GitHub Pages.
   - En TikTok: verificar "URL prefix", crear el Sandbox y agregar Login Kit y Content Posting API.

## Contenido de la carpeta
- `render/`: motor de animación (HTML con Playwright), escenas de cada parte (`scenes_p2.js`, `scenes_p3.js`, `scenes_p4.js`) y scripts de render y mezcla.
- `eleven/`: música y efectos de sonido generados con ElevenLabs.
- `voces/`, `parte2/`, `parte3/`, `parte4/`: voces de Coco y Pipo, y datos de sincronización de labios.
- `fotos/`: fotos con licencia libre y las cabezotas recortadas.
- `sitio/`: páginas de inicio, términos, privacidad y autorización para la app de TikTok.
- `lines.py` y `proc_voice.py`: guiones de voz y procesamiento.

## Rehacer un video
```bash
cd render
python3 build_part.py parte4 scenes_p4.js parte4.html
PAGE=parte4.html OUT=p4_noaudio.mp4 node renderP.js
```

©️ 2026 Coco / Ernesto. Contenido original con fines informativos. Las acusaciones no probadas se señalan como tales.
