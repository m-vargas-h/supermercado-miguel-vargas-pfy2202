export const ACCIONES = {
    AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
    AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
    AUMENTAR_CANTIDAD: 'AUMENTAR_CANTIDAD',
    DISMINUIR_CANTIDAD: 'DISMINUIR_CANTIDAD',
    QUITAR_DEL_CARRITO: 'QUITAR_DEL_CARRITO',
    VACIAR_CARRITO: 'VACIAR_CARRITO',
}

// Action creators: cada componente usa estas funciones en vez de armar el objeto de la acción a mano
export const agregarArticulo = (articulo) => ({ type: ACCIONES.AGREGAR_ARTICULO, payload: articulo })
export const agregarAlCarrito = (id, cantidad) => ({ type: ACCIONES.AGREGAR_AL_CARRITO, payload: { id, cantidad } })
export const aumentarCantidad = (id) => ({ type: ACCIONES.AUMENTAR_CANTIDAD, payload: { id } })
export const disminuirCantidad = (id) => ({ type: ACCIONES.DISMINUIR_CANTIDAD, payload: { id } })
export const quitarDelCarrito = (id) => ({ type: ACCIONES.QUITAR_DEL_CARRITO, payload: { id } })
export const vaciarCarrito = () => ({ type: ACCIONES.VACIAR_CARRITO })