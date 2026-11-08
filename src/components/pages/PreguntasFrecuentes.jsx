import { useState } from 'react'

function PreguntasFrecuentes() {
    const [abierta, setAbierta] = useState(0)

    const preguntas = [
        {
            pregunta: "¿Qué información muestra el inventario?",
            respuesta: "El inventario muestra cada producto con su marca, tipo, precio, stock actual y estado de disponibilidad."
        },
        {
            pregunta: "¿Qué significa \"Stock bajo\"?",
            respuesta: "Indica que el producto tiene menos de 10 unidades disponibles y debe considerarse para reposición."
        },
        {
            pregunta: "¿Cómo filtro los productos por categoría?",
            respuesta: "En \"Lista de artículos\", usa el selector \"Filtrar por categoría\" para ver solo los productos de esa categoría. El filtro no modifica el inventario: al volver a \"Todas\" se muestran todos los artículos."
        },
        {
            pregunta: "¿Cómo agrego un nuevo artículo?",
            respuesta: "Desde el menú superior, entra a \"Agregar artículo\", completa el formulario y presiona \"Guardar artículo\". El artículo aparecerá en la lista y en el inventario."
        },
        {
            pregunta: "¿Cómo veo el detalle de un producto?",
            respuesta: "Haz clic en el nombre del producto o en el botón \"Ver detalle\". Se abrirá una página con toda su información."
        },
        {
            pregunta: "¿Cómo funciona el carrito?",
            respuesta: "Desde el detalle de un producto elige la cantidad y presiona \"Agregar al carrito\". Esas unidades se descuentan del stock. En la página \"Carrito\" puedes aumentar o disminuir cantidades, quitar productos o vaciar el carrito, y el inventario se actualiza en cada cambio."
        },
        {
            pregunta: "¿Qué hago si un producto aparece sin stock?",
            respuesta: "Debes informar al encargado de bodega para gestionar la reposición con el proveedor correspondiente."
        }
    ]

    return (
        <main className="contenedor">
            <h2 className="titulo-pagina">Preguntas frecuentes</h2>

            <div className="tarjeta divide-y divide-gray-200 overflow-hidden">
                {preguntas.map((item, i) => {
                    const estaAbierta = abierta === i
                    return (
                        <div key={i}>
                            <h3>
                                <button
                                    type="button"
                                    onClick={() => setAbierta(estaAbierta ? null : i)}
                                    aria-expanded={estaAbierta}
                                    aria-controls={"faq-" + i}
                                    className={
                                        "flex w-full items-center justify-between px-4 py-3 text-left font-medium transition-colors " +
                                        (estaAbierta ? "bg-marca-50 text-marca-800" : "hover:bg-gray-50")
                                    }
                                >
                                    {item.pregunta}
                                    <span className={"ml-4 transition-transform " + (estaAbierta ? "rotate-180" : "")}>▾</span>
                                </button>
                            </h3>
                            {estaAbierta && (
                                <div id={"faq-" + i} className="px-4 pb-4 pt-1 text-gray-600">
                                    {item.respuesta}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default PreguntasFrecuentes