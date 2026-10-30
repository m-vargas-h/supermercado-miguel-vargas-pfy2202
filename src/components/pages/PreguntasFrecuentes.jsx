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
            pregunta: "¿Cómo filtro los productos por tipo?",
            respuesta: "En la página de inicio, usa el selector \"Filtrar por tipo\" sobre la tabla para ver solo los productos de un tipo."
        },
        {
            pregunta: "¿Cómo agrego un nuevo artículo?",
            respuesta: "Desde el menú superior, entra a \"Agregar artículo\", completa el formulario y presiona \"Guardar artículo\". El artículo aparecerá en la lista y en el inventario."
        },
        {
            pregunta: "¿Cómo veo el detalle de un producto?",
            respuesta: "Haz clic en el botón \"Ver detalle\" de la fila del producto. Se abrirá una página con toda su información."
        },
        {
            pregunta: "¿Qué hago si un producto aparece sin stock?",
            respuesta: "Debes informar al encargado de bodega para gestionar la reposición con el proveedor correspondiente."
        }
    ]

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
            <h2 className="mb-6 text-2xl font-bold">Preguntas frecuentes</h2>

            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
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
                                        (estaAbierta ? "bg-green-50 text-green-800" : "hover:bg-gray-50")
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