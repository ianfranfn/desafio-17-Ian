import { useContext, useEffect, useState } from "react"
import UsuariosContext from "../contexts/UsuariosContext"

const Formulario = () => {

    const { agregarUsuario, setUsuariosAEditar, usuariosAEditar, editarUsuario } = useContext(UsuariosContext)

    const dataFormularioInicial ={
        id: null,
        nombre: '',
        apellido: '',
        edad: '',
        puesto: '',
        imagen: ''
    }

    const [dataFormulario, setDataFormulario] = useState(dataFormularioInicial)
 
    useEffect(() => {
        usuariosAEditar ? setDataFormulario(usuariosAEditar) : setDataFormulario(dataFormularioInicial)
    }, [usuariosAEditar])

    const handleChange = (e) => {
        const dataActualizada = {
            ...dataFormulario,
            [e.target.name]: e.target.value
        }

        setDataFormulario(dataActualizada)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ( dataFormulario.id === null ) {
            agregarUsuario(dataFormulario)
        } else {
            editarUsuario(dataFormulario)
        }

        handleReset()
    }

    const handleReset = () => {
        setDataFormulario(dataFormularioInicial)
        setUsuariosAEditar(null) 
    }

    return (
        <>
        <h2 className="text-2xl font-semibold my-4">
            Formulario de { usuariosAEditar ? 'edicion' : 'carga' } de usuarios
        </h2>

        <div className="max-w-lg mb-4">
            <form className="bg-white border rounded-lg p-6" onSubmit={handleSubmit}>
                <label htmlFor="lbl-nombre" className="block text-sm font-medium text-gray-700">
                    Nombre
                </label>
                <input 
                type="text"
                id="lbl-nombre"
                placeholder="Ingresa el Nombre"
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="nombre"
                onChange={handleChange}
                value={dataFormulario.nombre}
                />
                <label htmlFor="lbl-apellido" className="block text-sm font-medium text-gray-700">
                    Apellido
                </label>
                <input 
                type="text"
                id="lbl-apellido" 
                placeholder="Ingresa el apellido" 
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="apellido"
                onChange={handleChange}
                value={dataFormulario.apellido}
                />
                <label htmlFor="lbl-edad" className="block text-sm font-medium text-gray-700">
                    Edad
                </label>
                <input 
                type="number"
                id="lbl-edad"
                placeholder="Ingresa la edad"
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="edad"
                onChange={handleChange}
                value={dataFormulario.edad}
                />
                <label htmlFor="lbl-puesto" className="block text-sm font-medium text-gray-700">
                    Puesto
                </label>
                <input 
                type="text"
                id="lbl-puesto"
                placeholder="Ingresa el puesto"
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="puesto"
                onChange={handleChange}
                value={dataFormulario.puesto}
                />
                <label htmlFor="lbl-img" className="block text-sm font-medium text-gray-700">
                    Imágen
                </label>
                <input 
                type="text"
                id="lbl-img"
                placeholder="Ingresa la imágen"
                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="imagen"
                onChange={handleChange}
                value={dataFormulario.imagen}
                />

                <div className="flex justify-between">
                    <button
                    type="submit"
                    className={`px-4 py-2 ${ usuariosAEditar ? 'bg-yellow-500' : 'bg-green-500' } text-white rounded-lg ${usuariosAEditar ? 'hover:bg-yellow-700' : 'hover:bg-green-700'} cursor-pointer`}
                    >
                        { usuariosAEditar ? 'Editar' : 'crear' }
                    </button>
                    <button
                    type="reset"
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
                    onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    </>
    )
}

export default Formulario