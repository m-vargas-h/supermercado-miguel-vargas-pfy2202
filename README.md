# Supermercado - Gestión de Inventario

Sitio web desarrollado en React para la gestión de inventario de un supermercado: listado con filtro por categoría, detalle de artículos, carrito de compras que actualiza el stock y formulario para registrar nuevos artículos.

**Sitio publicado:** https://m-vargas-h.github.io/supermercado-miguel-vargas-pfy2202/


## Tecnologías
- React 19 + Vite
- React Router v7 (`react-router`): rutas centralizadas, rutas anidadas con Layout, parámetros dinámicos y lazy loading
- Estado global con Context API + `useReducer`
- Tailwind CSS v4: tema con `@theme` y clases reutilizables con `@apply`
- gh-pages para el despliegue en GitHub Pages

## Funcionalidades
- **Inicio:** resumen del inventario (productos registrados, stock bajo y sin stock) y tabla de artículos por reponer.
- **Lista de artículos:** todos los artículos con filtro por categoría. El filtro es un estado local y la lista se deriva del inventario, sin modificar los datos originales.
- **Detalle de artículo:** se abre al hacer clic en el nombre o en "Ver detalle". Permite elegir la cantidad (limitada al stock) y agregarla al carrito; las unidades agregadas se descuentan del inventario.
- **Carrito:** lista los artículos agregados con su subtotal y el total de la compra. Permite aumentar o disminuir cantidades, quitar artículos y vaciar el carrito; cada cambio actualiza el inventario. El menú muestra un contador de unidades.
- **Agregar artículo:** formulario validado con expresiones regulares que registra el artículo en el estado global.
- **Diseño responsive:** en celular la lista se muestra como tarjetas y desde tablet como tabla.

## Páginas y rutas
| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Resumen de stock y artículos por reponer |
| `/articulos` | Lista de artículos | Listado completo con filtro por categoría |
| `/producto/:id` | Detalle de artículo | Información del artículo y agregar al carrito (ruta dinámica con `useParams`) |
| `/carrito` | Carrito | Artículos agregados, modificación de cantidades y total |
| `/agregar` | Agregar artículo | Formulario para registrar artículos |
| `/quienes-somos` | Quiénes somos | Historia, misión, visión y valores |
| `/preguntas-frecuentes` | Preguntas frecuentes | Uso del sistema (acordeón) |
| `*` | No encontrada | Página para rutas inexistentes |

Todas las rutas se definen en `src/routes/AppRoutes.jsx` como rutas anidadas de `Layout` (Header + `Outlet` + menú inferior). Las páginas se cargan con `React.lazy` y `Suspense`.

## Estado global
`InventarioProvider` mantiene un único estado con `useReducer`:

```js
{
  articulos: [ { id, nombre, marca, tipo, precio, stock, descripcion } ],
  carrito:   [ { id, cantidad } ]   // los datos del artículo se leen desde "articulos"
}
```

El inventario y el carrito comparten un solo reducer porque el stock depende de lo que hay en el carrito. Los componentes acceden al estado con el hook `useInventario()` y despachan acciones mediante action creators (`src/context/inventarioAcciones.js`):

| Action creator | Efecto |
|----------------|--------|
| `agregarArticulo(articulo)` | Agrega un artículo al inventario (si el payload es válido) |
| `agregarAlCarrito(id, cantidad)` | Agrega unidades al carrito y las descuenta del stock |
| `aumentarCantidad(id)` | Suma 1 unidad en el carrito y resta 1 del stock |
| `disminuirCantidad(id)` | Resta 1 unidad del carrito y la devuelve al stock (en 0 se quita) |
| `quitarDelCarrito(id)` | Quita el artículo y devuelve todas sus unidades al stock |
| `vaciarCarrito()` | Vacía el carrito y devuelve todo el stock |

El reducer valida cada payload: ignora artículos que no cumplen la estructura mínima, cantidades no enteras o mayores al stock disponible, y descarta campos desconocidos.

## Validaciones
Definidas en `src/utils/validaciones.js` y `src/constants/articulos.js`. Las usan tanto el formulario como el reducer.

| Campo | Regla |
|-------|-------|
| Nombre | 2 a 60 caracteres: letras (con tildes y ñ), números, espacios y `. , ( ) - / %`; al menos una letra |
| Marca | 2 a 40 caracteres: solo letras (con tildes y ñ) y espacios |
| Tipo | Una de las categorías definidas en `src/constants/categorias.js` |
| Precio | Solo dígitos, mayor a 0 (CLP sin decimales) |
| Stock | Solo dígitos, entero mayor o igual a 0 |

## Estilos
- **Tema** (`src/index.css`, `@theme`): colores de marca `marca-50` a `marca-900`.
- **Clases reutilizables** (`@layer components` + `@apply`): `contenedor`, `titulo-pagina`, `tarjeta`, `btn` y variantes, `tabla-*`, `campo-input`, `alerta-exito` y `enlace`.
- **Componente `Boton`**: variantes `primario`, `secundario`, `peligro` y `neutro`; se renderiza como `Link` cuando recibe `to`.

## Instalación y ejecución
```bash
git clone https://github.com/m-vargas-h/supermercado-miguel-vargas-pfy2202.git
cd supermercado-miguel-vargas-pfy2202
npm install
npm run dev
```
Luego abrir `http://localhost:5173/supermercado-miguel-vargas-pfy2202/` en el navegador.

## Despliegue
El sitio se publica en GitHub Pages desde la rama `gh-pages`. Para que funcione en la subruta del repositorio:
- `vite.config.js` define `base: '/supermercado-miguel-vargas-pfy2202/'`.
- `BrowserRouter` usa `basename={import.meta.env.BASE_URL}`.
- El script `postbuild` copia `index.html` como `404.html`, para que al recargar una ruta interna (por ejemplo `/articulos`) GitHub Pages cargue la aplicación.

## Estructura del proyecto
```
src/
├── App.jsx                       # InventarioProvider + BrowserRouter + AppRoutes
├── main.jsx
├── index.css                     # Tailwind: @theme y clases con @apply
├── datos.json                    # Datos iniciales del inventario
├── routes/
│   └── AppRoutes.jsx             # Rutas centralizadas, anidadas y con lazy loading
├── context/
│   ├── InventarioContext.js      # Contexto y hook useInventario
│   ├── InventarioProvider.jsx    # Proveedor del estado global
│   ├── inventarioReducer.js      # Reducer con validación de payloads
│   └── inventarioAcciones.js     # Tipos de acción y action creators
├── constants/
│   ├── categorias.js             # Categorías de productos
│   └── articulos.js              # FORM_INICIAL y expresiones regulares
├── utils/
│   ├── validaciones.js           # Validación del formulario y del payload
│   └── carrito.js                # Ítems, unidades y total del carrito
└── components/
    ├── Layout.jsx                # Header + Outlet + menú inferior
    ├── Header.jsx
    ├── MenuPrincipal.jsx         # Menú superior con contador del carrito
    ├── MenuInferior.jsx
    ├── Cargando.jsx              # Fallback de Suspense
    ├── Boton.jsx                 # Botón reutilizable con variantes
    ├── Campo.jsx                 # Etiqueta + control + error de formulario
    ├── TablaArticulos.jsx        # Tabla (escritorio) / tarjetas (móvil)
    ├── FilaProducto.jsx
    ├── TarjetaArticulo.jsx
    ├── FiltroCategoria.jsx
    ├── EstadoStock.jsx
    ├── SelectorCantidad.jsx      # Botones − / + reutilizados en detalle y carrito
    ├── ItemCarrito.jsx
    └── pages/
        ├── Home.jsx
        ├── ListaArticulos.jsx
        ├── DetalleProducto.jsx
        ├── Carrito.jsx
        ├── AgregarArticulo.jsx
        ├── QuienesSomos.jsx
        ├── PreguntasFrecuentes.jsx
        └── NoEncontrada.jsx
```