# Sebastián Venegas — Portfolio

Portfolio built with HTML, CSS and JavaScript. No installation or build step is required.

## Run locally

Extract the ZIP and keep the folders together. From this directory, run:

```
python -m http.server 8000
```

Open http://localhost:8000/. On Windows, `start-local.bat` starts the same server if Python is installed. Stop it with Ctrl+C.

The portfolio can also open as a local file, but Unity requires HTTP; the demo displays these instructions when opened through `file://`.

## Structure

| File | Responsibility |
| --- | --- |
| `index.html` | Page shell, navigation, stylesheet and script loading |
| `css/styles.css` | Layout, typography, colors and responsive styles |
| `js/translations.js` | English and Spanish site text |
| `js/diagrams.js` | SVG diagrams used |
| `js/projects.js` | Featured and secondary project content |
| `js/views.js` | Home and project page rendering |
| `js/app.js` | Navigation, language selection and initialization |
| `assets/Sebastian-Venegas-CV.pdf` | Downloadable resume |

## Unity demo

- `supermarket.html`: dedicated demo page and parameter legend.
- `css/demo.css`: player and legend layout.
- `js/demo-translations.js`: English and Spanish demo page text.
- `js/demo.js`: Unity loading, progress, errors, fullscreen and language switching.
- `demos/supermarket/Build/`: supplied Unity build. Gzip payloads were decompressed without changing their contents so a basic static server can serve them without custom Content-Encoding headers. Serve `.wasm` as `application/wasm`.

Unity assets load only on the demo page. Changing the page language does not recreate the Unity instance or translate text inside the compiled Unity interface.
