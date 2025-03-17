import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router"
import { useContext } from "react";
import UsuariosContext from "../contexts/UsuariosContext";

const Fila = ({ usuario }) => { // props = { producto, borrarProducto }

    const { borrarUsuario, setUsuarioAEditar } = useContext(UsuariosContext)

    const navigate = useNavigate() // Se inicializa el hook useNavigate

    const handleEliminar = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No serás capaz de revertir la acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "si, ¡Eliminalo!"
        }).then((result) => {
            if (result.isConfirmed) {
                borrarUsuario(id)
                Swal.fire({
                    title: "¡Eliminado!",
                    text: "El usuario ha sido eliminado.",
                    icon: "success"
                });
            }
        });
    }

    const handleEditar = (usuario) => {
        setUsuarioAEditar(usuario)
    }

    const handleVer = (id) => {
        navigate(`/usuarios/detalle/${id}`)
    }

    return (
        <tr className="bg-white border-b border-gray-200">
            <td className="px-6 py-4">{usuario.nombre}</td>
            <td className="px-6 py-4">{usuario.apellido}</td>
            <td className="px-6 py-4">{usuario.edad}</td>
            <td className="px-6 py-4">{usuario.puesto}</td>
            <td className="px-6 py-4">
                <button
                onClick={() => handleVer(usuario.id)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2">
                    Ver
                </button>
                <button
                onClick={() => handleEditar(usuario)}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 cursor-pointer mr-2">
                    Editar
                </button>
                <button
                onClick={() => handleEliminar(usuario.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2">
                    Borrar
                </button>
            </td>
        </tr>
    )
}

export default Fila

