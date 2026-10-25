function PreguntasFrecuentes() {
    const preguntas = [
        {
            pregunta: "¿Qué información muestra el inventario?",
            respuesta: "El inventario muestra cada producto con su categoría, precio, stock actual y estado de disponibilidad."
        },
        {
            pregunta: "¿Qué significa \"Stock bajo\"?",
            respuesta: "Indica que el producto tiene menos de 10 unidades disponibles y debe considerarse para reposición."
        },
        {
            pregunta: "¿Cómo filtro los productos por categoría?",
            respuesta: "En la página de inicio, usa el selector \"Filtrar por categoría\" sobre la tabla para ver solo los productos de una categoría."
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
        <main className="container py-4">
            <h2 className="mb-4">Preguntas frecuentes</h2>

            <div className="accordion" id="acordeon-faq">
                {preguntas.map((item, i) => (
                    <div className="accordion-item" key={i}>
                        <h3 className="accordion-header">
                            <button
                                className={"accordion-button" + (i === 0 ? "" : " collapsed")}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={"#faq-" + i}
                                aria-expanded={i === 0}
                                aria-controls={"faq-" + i}
                            >
                                {item.pregunta}
                            </button>
                        </h3>
                        <div
                            id={"faq-" + i}
                            className={"accordion-collapse collapse" + (i === 0 ? " show" : "")}
                            data-bs-parent="#acordeon-faq"
                        >
                            <div className="accordion-body">{item.respuesta}</div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default PreguntasFrecuentes