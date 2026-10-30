# Supermercado - Gestión de Inventario

Sitio web desarrollado en React para la gestión de inventario de un supermercado.

## Tecnologías
- React + Vite
- React Router (react-router-dom)
- Estado global con Context API + useReducer
- Tailwind CSS v4

## Páginas y rutas
| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Inventario de productos con filtro por tipo y resumen de stock |
| `/producto/:id` | Detalle de producto | Ruta dinámica con la información de un producto |
| `/agregar` | Agregar artículo | Formulario para ingresar nuevos artículos al estado global |
| `/articulos` | Lista de artículos | Tabla con todos los artículos del inventario |
| `/quienes-somos` | Quiénes somos | Historia, misión, visión y valores del supermercado |
| `/preguntas-frecuentes` | Preguntas frecuentes | Preguntas sobre el uso del sistema de inventario |
| `*` | No encontrada | Página para rutas inexistentes |

Navegación: menú superior (Agregar artículo, Lista de artículos) y menú inferior (Inicio, Quiénes somos, Preguntas frecuentes).

## Estado global
`InventarioProvider` envuelve la aplicación y mantiene la lista de artículos con `useReducer`
(acción `AGREGAR_ARTICULO`). Los componentes acceden a ella con el hook `useInventario()`.
Cada artículo tiene: nombre, marca, tipo, precio, stock y descripción.

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
├── App.jsx                     # Rutas (React Router) + InventarioProvider
├── datos.json                  # Datos iniciales de productos
├── index.css                   # Importación de Tailwind CSS
├── context/
│   ├── InventarioContext.js    # Contexto, reducer, acciones y hook useInventario
│   └── InventarioProvider.jsx  # Proveedor del estado global
└── components/
    ├── Header.jsx
    ├── MenuPrincipal.jsx       # Menú superior
    ├── MenuInferior.jsx        # Menú inferior
    ├── FilaProducto.jsx
    ├── EstadoStock.jsx
    └── pages/
        ├── Home.jsx
        ├── DetalleProducto.jsx
        ├── AgregarArticulo.jsx
        ├── ListaArticulos.jsx
        ├── QuienesSomos.jsx
        ├── PreguntasFrecuentes.jsx
        └── NoEncontrada.jsx
```