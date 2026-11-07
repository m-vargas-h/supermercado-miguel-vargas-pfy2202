export const FORM_INICIAL = {
    nombre: "",
    marca: "",
    tipo: "",
    precio: "",
    stock: "",
    descripcion: "",
}

const LETRAS = "A-Za-zÁÉÍÓÚÜÑáéíóúüñ"

export const PATRONES = {
    // Letras (con tildes y ñ), números, espacios y . , ( ) - / %  → permite "Leche entera 1L" o "Manzana roja (kg)"
    // Debe contener al menos una letra
    nombre: new RegExp(`^(?=.*[${LETRAS}])[${LETRAS}0-9 .,()\\-/%]{2,60}$`),
    // Solo letras (con tildes y ñ) y espacios
    marca: new RegExp(`^[${LETRAS} ]{2,40}$`),
    // Solo dígitos (CLP sin decimales)
    precio: /^\d+$/,
    stock: /^\d+$/,
}