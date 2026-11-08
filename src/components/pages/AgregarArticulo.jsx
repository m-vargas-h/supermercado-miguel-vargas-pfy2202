import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useInventario } from '../../context/InventarioContext'
import { agregarArticulo } from '../../context/inventarioAcciones'
import { CATEGORIAS } from '../../constants/categorias'
import { FORM_INICIAL } from '../../constants/articulos'
import { validarFormularioArticulo } from '../../utils/validaciones'
import Campo from '../Campo'
import Boton from '../Boton'

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

    const claseInput = (campo) => "campo-input" + (errores[campo] ? " campo-input-error" : "")

    return (
        <main className="contenedor">
            <h2 className="titulo-pagina">Agregar artículo</h2>

            <form
                onSubmit={handleSubmit}
                noValidate
                className="tarjeta max-w-2xl p-6"
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
                    <Boton type="submit">Guardar artículo</Boton>
                    <Boton variante="neutro" onClick={handleLimpiar}>Limpiar</Boton>
                </div>
            </form>
        </main>
    )
}

export default AgregarArticulo