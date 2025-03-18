import { useContext } from "react";
import Filas from "./Filas";
import Spinner from "./Spinner";
import UsuariosContext from "../contexts/UsuariosContext";

const ListadoUsuarios = () => {

    const {usuarios} = useContext(UsuariosContext)

    return (
        <>
        {usuarios ? (
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th className="px-6 py-3">Nombre</th>
                        <th className="px-6 py-3">Apellido</th>
                        <th className="px-6 py-3">Edad</th>
                        <th className="px-6 py-3">Puesto</th>
                        <th className="px-6 py-3">Imágen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => (
                            <Filas 
                            usuario={usuario}
                            key={usuario.id}
                            />
                        ))
                    }
                </tbody>
            </table>
        ) : (
            <Spinner />
        )}
        </>
    )
}

export default ListadoUsuarios;