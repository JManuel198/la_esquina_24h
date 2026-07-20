# La Esquina 24H — Menú digital

Menú digital para **La Esquina 24H**, pensado para abrirse desde el móvil
(por ejemplo escaneando un código QR en la mesa). Es un prototipo estático:
solo HTML, CSS y JavaScript vanilla, sin dependencias ni build.

Se están explorando **tres variaciones de diseño** sobre la misma paleta
oscura con acento rojo, para comparar estilos antes de elegir uno.

## Variaciones

Todas están en [`/variaciones/`](variaciones/) y comparten los datos del menú
y los estilos base:

| Archivo | Nombre | En qué consiste |
|---|---|---|
| [`1a-clasico.html`](variaciones/1a-clasico.html) | **Clásico** | Lista vertical de productos con foto, nombre y precio. Header fijo arriba, banner de promoción y tabs subrayadas por categoría. La opción más sobria y directa. |
| [`1b-bento.html`](variaciones/1b-bento.html) | **Bento / Grid** | Hero grande de portada y productos en cuadrícula de dos columnas tipo *bento*. Tabs en forma de píldora y botón flotante de WhatsApp. Más visual. |
| [`1c-urbano.html`](variaciones/1c-urbano.html) | **Urbano / Ticker** | Estilo callejero: cinta (*ticker*) animada arriba, tipografía display, bordes marcados y tabs en rejilla 2×2. La más llamativa. |

## Estructura

```
├── variaciones/     Las tres maquetas (1a, 1b, 1c)
├── css/
│   └── styles.css   Variables de diseño y estilos compartidos
├── js/
│   ├── menu-data.js Datos del menú (window.MENU), compartidos por las 3
│   └── main.js      Animaciones de aparición al scroll + header sticky
└── README.md
```

## Detalles

- **Responsive:** cada variación es un marco tipo móvil (máx. 440 px de ancho)
  que se adapta hasta ese ancho y se centra en pantallas más grandes.
- **Animaciones:** al hacer scroll, el banner, las tabs y cada tarjeta
  aparecen con un *fade-in* y un leve desplazamiento hacia arriba
  (`IntersectionObserver`). Respeta `prefers-reduced-motion`.
- **Accesibilidad:** imágenes con texto alternativo descriptivo y contraste
  de texto pensado para fondo oscuro.

## Cómo verlo

Abre cualquiera de los archivos de `/variaciones/` en el navegador. Si tu
navegador bloquea la carga de los `.js` por CORS al abrir con `file://`,
sirve la carpeta con un servidor local, por ejemplo:

```bash
python3 -m http.server
```

y entra a `http://localhost:8000/variaciones/1a-clasico.html`.
