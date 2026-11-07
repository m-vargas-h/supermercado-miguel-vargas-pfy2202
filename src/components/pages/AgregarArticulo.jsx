import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useInventario } from '../../context/InventarioContext'
import { agregarArticulo } from '../../context/inventarioAcciones'
import { CATEGORIAS } from '../../constants/categorias'
import { FORM_INICIAL } from '../../constants/articulos'
import { validarFormularioArticulo } from '../../utils/validaciones'
import Campo from '../Campo'

function AgregarArticulo() {
    const { dispatch } = useInventario()
    const navigate = useNavigate()
    const [form, setForm] = useState(FORM_INICIAL)
    const [errores, setErrores] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const nuevosErrores = validarFormularioArticulo(form)
        setErrores(nuevosErrores)
        if (Object.keys(nuevosErrores).length > 0) return

        dispatch(agregarArticulo({
            nombre: form.nombre.trim(),
            marca: form.marca.trim(),
            tipo: form.tipo,
            precio: Number(form.precio),
            stock: Number(form.stock),
            descripcion: form.descripcion.trim(),
        }))

        navigate("/articulos", { state: { mensaje: `"${form.nombre.trim()}" se agregó al inventario` } })
    }

    const handleLimpiar = () => {
        setForm(FORM_INICIAL)
        setErrores({})
    }

    const claseInput = (campo) =>
        "w-full rounded-md border bg-white px-3 py-2 focus:outline-none focus:ring-2 " +
        (errores[campo]
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:border-green-600 focus:ring-green-200")

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
            <h2 className="mb-6 text-2xl font-bold">Agregar artículo</h2>

            <form
                onSubmit={handleSubmit}
                noValidate
                className="max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    <Campo id="nombre" etiqueta="Nombre *" error={errores.nombre}>
                        <input id="nombre" name="nombre" type="text" value={form.nombre}
                            onChange={handleChange} className={claseInput("nombre")} placeholder="Ej: Leche descremada 1L" />
                    </Campo>

                    <Campo id="marca" etiqueta="Marca *" error={errores.marca}>
                        <input id="marca" name="marca" type="text" value={form.marca}
                            onChange={handleChange} className={claseInput("marca")} placeholder="Ej: Colun" />
                    </Campo>

                    <Campo id="tipo" etiqueta="Tipo de producto *" error={errores.tipo}>
                        <select id="tipo" name="tipo" value={form.tipo}
                            onChange={handleChange} className={claseInput("tipo")}>
                            <option value="">Selecciona un tipo</option>
                            {CATEGORIAS.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </Campo>

                    <Campo id="precio" etiqueta="Precio (CLP) *" error={errores.precio}>
                        <input id="precio" name="precio" type="text" inputMode="numeric" value={form.precio}
                            onChange={handleChange} className={claseInput("precio")} placeholder="Ej: 1290" />
                    </Campo>

                    <Campo id="stock" etiqueta="Stock *" error={errores.stock}>
                        <input id="stock" name="stock" type="text" inputMode="numeric" value={form.stock}
                            onChange={handleChange} className={claseInput("stock")} placeholder="Ej: 20" />
                    </Campo>

                    <div className="sm:col-span-2">
                        <Campo id="descripcion" etiqueta="Descripción (opcional)">
                            <textarea id="descripcion" name="descripcion" rows="3" value={form.descripcion}
                                onChange={handleChange} className={claseInput("descripcion")} />
                        </Campo>
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button type="submit"
                        className="rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700">
                        Guardar artículo
                    </button>
                    <button type="button" onClick={handleLimpiar}
                        className="rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100">
                        Limpiar
                    </button>
                </div>
            </form>
        </main>
    )
}

export default AgregarArticulo