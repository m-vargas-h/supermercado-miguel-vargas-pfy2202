import { createContext, useContext } from 'react'

export const InventarioContext = createContext(null)

export const ACCIONES = {
    AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
}

export function inventarioReducer(articulos, accion) {
    switch (accion.type) {
        case ACCIONES.AGREGAR_ARTICULO: {
            const nuevoId = articulos.length > 0
                ? Math.max(...articulos.map(a => a.id)) + 1
                : 1
            return [...articulos, { id: nuevoId, ...accion.payload }]
        }
        default:
            return articulos
    }
}

export function useInventario() {
    const contexto = useContext(InventarioContext)
    if (!contexto) {
        throw new Error('useInventario debe usarse dentro de InventarioProvider')
    }
    return contexto
}