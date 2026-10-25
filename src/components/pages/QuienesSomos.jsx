function QuienesSomos() {
    const valores = [
        { titulo: "Calidad", texto: "Seleccionamos productos frescos y de proveedores confiables." },
        { titulo: "Precios justos", texto: "Mantenemos precios competitivos para el día a día de las familias." },
        { titulo: "Cercanía", texto: "Somos un supermercado de barrio que conoce a sus clientes." }
    ]

    return (
        <main className="container py-4">
            <h2 className="mb-4">Quiénes somos</h2>

            <p className="lead">
                Somos un supermercado familiar fundado en 2010, dedicado a ofrecer productos
                de consumo diario con buena calidad y a precios accesibles.
            </p>
            <p>
                Para mantener nuestras góndolas siempre abastecidas, contamos con este sistema
                de gestión de inventario, que nos permite controlar el stock de cada producto
                y detectar a tiempo los que necesitan reposición.
            </p>

            <div className="row g-4 my-3">
                <div className="col-md-6">
                    <div className="card h-100 border-success">
                        <div className="card-body">
                            <h4 className="card-title text-success">Misión</h4>
                            <p className="card-text">
                                Abastecer a nuestra comunidad con productos de calidad, ofreciendo
                                una atención cercana y un servicio eficiente.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 border-success">
                        <div className="card-body">
                            <h4 className="card-title text-success">Visión</h4>
                            <p className="card-text">
                                Ser el supermercado de barrio preferido de la zona, reconocido por
                                su variedad, buenos precios y disponibilidad de productos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className="mt-4 mb-3">Nuestros valores</h4>
            <div className="row g-3">
                {valores.map(valor => (
                    <div className="col-md-4" key={valor.titulo}>
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <h5 className="card-title">{valor.titulo}</h5>
                                <p className="card-text">{valor.texto}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default QuienesSomos