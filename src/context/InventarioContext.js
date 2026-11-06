import { createContext, useContext } from 'react'

export const InventarioContext = createContext(null)

export const ACCIONES = {
    AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
    AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
    AUMENTAR_CANTIDAD: 'AUMENTAR_CANTIDAD',
    DISMINUIR_CANTIDAD: 'DISMINUIR_CANTIDAD',
    QUITAR_DEL_CARRITO: 'QUITAR_DEL_CARRITO',
    VACIAR_CARRITO: 'VACIAR_CARRITO',
}

// Suma (o resta, si la diferencia es negativa) stock a un artículo sin mutar el array
function actualizarStock(articulos, id, diferencia) {
    return articulos.map(a => a.id === id ? { ...a, stock: a.stock + diferencia } : a)
}

export function inventarioReducer(estado, accion) {
    const { articulos, carrito } = estado

    switch (accion.type) {
        case ACCIONES.AGREGAR_ARTICULO: {
            const nuevoId = articulos.length > 0
                ? Math.max(...articulos.map(a => a.id)) + 1
                : 1
            return { ...estado, articulos: [...articulos, { id: nuevoId, ...accion.payload }] }
        }

        case ACCIONES.AGREGAR_AL_CARRITO: {
            const { id, cantidad } = accion.payload
            const articulo = articulos.find(a => a.id === id)
            if (!articulo || cantidad <= 0 || cantidad > articulo.stock) return estado

            const enCarrito = carrito.find(item => item.id === id)
            const nuevoCarrito = enCarrito
                ? carrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item)
                : [...carrito, { id, cantidad }]

            return { articulos: actualizarStock(articulos, id, -cantidad), carrito: nuevoCarrito }
        }

        case ACCIONES.AUMENTAR_CANTIDAD: {
            const { id } = accion.payload
            const articulo = articulos.find(a => a.id === id)
            if (!articulo || articulo.stock === 0 || !carrito.some(item => item.id === id)) return estado

            return {
                articulos: actualizarStock(articulos, id, -1),
                carrito: carrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item),
            }
        }

        case ACCIONES.DISMINUIR_CANTIDAD: {
            const { id } = accion.payload
            const enCarrito = carrito.find(item => item.id === id)
            if (!enCarrito) return estado

            const nuevoCarrito = enCarrito.cantidad === 1
                ? carrito.filter(item => item.id !== id)
                : carrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item)

            return { articulos: actualizarStock(articulos, id, 1), carrito: nuevoCarrito }
        }

        case ACCIONES.QUITAR_DEL_CARRITO: {
            const { id } = accion.payload
            const enCarrito = carrito.find(item => item.id === id)
            if (!enCarrito) return estado

            return {
                articulos: actualizarStock(articulos, id, enCarrito.cantidad),
                carrito: carrito.filter(item => item.id !== id),
            }
        }

        case ACCIONES.VACIAR_CARRITO: {
            const nuevosArticulos = carrito.reduce(
                (lista, item) => actualizarStock(lista, item.id, item.cantidad),
                articulos
            )
            return { articulos: nuevosArticulos, carrito: [] }
        }

        default:
            return estado
    }
}

export function useInventario() {
    const contexto = useContext(InventarioContext)
    if (!contexto) {
        throw new Error('useInventario debe usarse dentro de InventarioProvider')
    }
    return contexto
}