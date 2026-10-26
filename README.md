# Supermercado - Gestión de Inventario

Sitio web desarrollado en React para la gestión de inventario de un supermercado.
Actividad formativa 1 – Semana 1 – Desarrollo Frontend II

## Tecnologías
- React + Vite
- React Router (react-router-dom)
- Bootstrap 5

## Páginas y rutas
| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Inventario de productos con filtro por categoría y resumen de stock |
| `/producto/:id` | Detalle de producto | Ruta dinámica con la información de un producto |
| `/quienes-somos` | Quiénes somos | Historia, misión, visión y valores del supermercado |
| `/preguntas-frecuentes` | Preguntas frecuentes | Preguntas sobre el uso del sistema de inventario |
| `*` | No encontrada | Página para rutas inexistentes |

La navegación entre páginas se realiza desde el menú inferior, sin recargar el sitio (SPA).

## Instalación y ejecución
```bash
git clone https://github.com/m-vargas-h/supermercado-miguel-vargas-pfy2202.git
cd supermercado-miguel-vargas-pfy2202
npm install
npm run dev
```
Luego abrir `http://localhost:5173` en el navegador.

## Estructura principal
```
src/
├── App.jsx                  # Configuración de rutas (React Router)
├── datos.json               # Datos de productos
└── components/
    ├── Header.jsx
    ├── MenuInferior.jsx     # Menú de navegación inferior
    ├── FilaProducto.jsx
    ├── EstadoStock.jsx
    └── pages/
        ├── Home.jsx
        ├── DetalleProducto.jsx
        ├── QuienesSomos.jsx
        ├── PreguntasFrecuentes.jsx
        └── NoEncontrada.jsx
```