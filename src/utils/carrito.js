// Combina cada ítem del carrito ({ id, cantidad }) con los datos actuales del artículo
export function obtenerItemsCarrito(carrito, articulos) {
    return carrito
        .map(item => ({ ...item, articulo: articulos.find(a => a.id === item.id) }))
        .filter(item => item.articulo)
}

export function contarUnidades(carrito) {
    return carrito.reduce((total, item) => total + item.cantidad, 0)
}

export function calcularTotal(items) {
    return items.reduce((total, item) => total + item.articulo.precio * item.cantidad, 0)
}