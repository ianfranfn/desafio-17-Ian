import Filas from "./Filas";
import Spinner from "./Spinner";

const ListadoUsuarios = ({
    usuarios,
    borrarUsuario,
    setUsuarioAEditar,
}) => {

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
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => (
                            <Filas 
                            usuario={usuario}
                            key={usuario.id}
                            borrarUsuario={borrarUsuario}
                            setUsuarioAEditar={setUsuarioAEditar}
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