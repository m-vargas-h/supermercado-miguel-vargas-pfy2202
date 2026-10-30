function QuienesSomos() {
    const valores = [
        { titulo: "Calidad", texto: "Seleccionamos productos frescos y de proveedores confiables." },
        { titulo: "Precios justos", texto: "Mantenemos precios competitivos para el día a día de las familias." },
        { titulo: "Cercanía", texto: "Somos un supermercado de barrio que conoce a sus clientes." }
    ]

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
            <h2 className="mb-6 text-2xl font-bold">Quiénes somos</h2>

            <p className="mb-3 text-lg">
                Somos un supermercado familiar fundado en 2010, dedicado a ofrecer productos
                de consumo diario con buena calidad y a precios accesibles.
            </p>
            <p className="mb-6 text-gray-600">
                Para mantener nuestras góndolas siempre abastecidas, contamos con este sistema
                de gestión de inventario, que nos permite controlar el stock de cada producto
                y detectar a tiempo los que necesitan reposición.
            </p>

            <div className="mb-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-green-600 bg-white p-5 shadow-sm">
                    <h4 className="mb-2 text-xl font-semibold text-green-700">Misión</h4>
                    <p className="text-gray-600">
                        Abastecer a nuestra comunidad con productos de calidad, ofreciendo
                        una atención cercana y un servicio eficiente.
                    </p>
                </div>
                <div className="rounded-lg border border-green-600 bg-white p-5 shadow-sm">
                    <h4 className="mb-2 text-xl font-semibold text-green-700">Visión</h4>
                    <p className="text-gray-600">
                        Ser el supermercado de barrio preferido de la zona, reconocido por
                        su variedad, buenos precios y disponibilidad de productos.
                    </p>
                </div>
            </div>

            <h4 className="mb-3 text-xl font-semibold">Nuestros valores</h4>
            <div className="grid gap-4 md:grid-cols-3">
                {valores.map(valor => (
                    <div key={valor.titulo} className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm">
                        <h5 className="mb-2 text-lg font-semibold">{valor.titulo}</h5>
                        <p className="text-gray-600">{valor.texto}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default QuienesSomos