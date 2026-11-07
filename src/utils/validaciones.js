import { CATEGORIAS } from '../constants/categorias'
import { PATRONES } from '../constants/articulos'

// Validación: recibe los valores como texto y devuelve un objeto con los errores por campo
export function validarFormularioArticulo(form) {
    const errores = {}
    const nombre = form.nombre.trim()
    const marca = form.marca.trim()

    if (nombre === "") errores.nombre = "Ingresa el nombre del artículo"
    else if (!PATRONES.nombre.test(nombre))
        errores.nombre = "Usa entre 2 y 60 caracteres: letras, números, espacios y . , ( ) - / %"

    if (marca === "") errores.marca = "Ingresa la marca"
    else if (!PATRONES.marca.test(marca))
        errores.marca = "La marca solo admite letras y espacios (entre 2 y 40 caracteres)"

    if (!CATEGORIAS.includes(form.tipo)) errores.tipo = "Selecciona un tipo de producto"

    if (!PATRONES.precio.test(form.precio)) errores.precio = "El precio solo admite dígitos"
    else if (Number(form.precio) <= 0) errores.precio = "El precio debe ser mayor a 0"

    if (!PATRONES.stock.test(form.stock)) errores.stock = "El stock debe ser un número entero mayor o igual a 0"

    return errores
}

// Validación del payload en el reducer: un artículo válido debe tener esta estructura mínima
export function esArticuloValido(articulo) {
    return Boolean(articulo)
        && typeof articulo.nombre === "string" && PATRONES.nombre.test(articulo.nombre)
        && typeof articulo.marca === "string" && PATRONES.marca.test(articulo.marca)
        && CATEGORIAS.includes(articulo.tipo)
        && Number.isInteger(articulo.precio) && articulo.precio > 0
        && Number.isInteger(articulo.stock) && articulo.stock >= 0
        && typeof articulo.descripcion === "string"
}

export function esCantidadValida(cantidad) {
    return Number.isInteger(cantidad) && cantidad > 0
}