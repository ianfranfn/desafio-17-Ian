import { useEffect, useState } from "react"

import Formulario from "./components/Formulario"
import ListadoUsuarios from "./components/ListadoUsuarios"

const App = () => {

  const [usuarios, setUsuarios] = useState(null)
  const [usuariosAEditar, setUsuariosAEditar] = useState(null)

  useEffect(() => {
    getAllUsuarios()
  }, [])

  const getAllUsuarios = async () => {

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND)

      if (!res.ok) {
        throw new Error('Error en la petición')
      }

      const data = await res.json()

      setUsuarios(data)

    } catch (error) {
      console.error(error.message);
    }
  }

  const agregarUsuario = async (nuevoUsuario) => {
    delete nuevoUsuario.id

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(nuevoUsuario)
      })

      if (!res.ok) {
        throw new Error('No se pudo hacer la peticion')
      }

      const usuarioAgregadoEnElBackend = await res.json()

      const nuevoEstadoUsuarios = [...usuarios, usuarioAgregadoEnElBackend]

      setUsuarios(nuevoEstadoUsuarios)
    } catch (error) {
      console.error(error.message);
    }
  }

  const editarUsuario = async (usuarioEditado) => {
    const urlEditar = import.meta.env.VITE_BACKEND + usuarioEditado.id

    try {

      const res = await fetch(urlEditar, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(usuarioEditado)
      })

      if (!res.ok) {
        throw new Error('No se puede hacer la peticion')
      }

      const usuarioEditadoBackend = await res.json()
      console.log(usuarioEditadoBackend);

      const nuevoEstadoUsuarios = usuarios.map(prod => prod.id === usuarioEditadoBackend.id ? usuarioEditado : prod)

      setUsuarios(nuevoEstadoUsuarios)
    } catch (error) {
      console.error(error.message);
    }
  }

  const borrarUsuario = async (id) => {
    const urlBorrado = import.meta.env.VITE_BACKEND + id

    try {
      const res = await fetch(urlBorrado, {
        method: 'DELETE'
      })

      if (!res.ok) {
        throw new Error('No se pudo hacer la peticion')
      }

      const usuarioEliminadoDelBackend = await res.json()
      console.log(usuarioEliminadoDelBackend);


    } catch (error) {
      console.error(error.message);
    }

    const nuevoEstadoUsuarios = usuarios.filter(prod => prod.id !== id)
    setUsuarios(nuevoEstadoUsuarios)

  }

  return (
    <>
      <h1 className="text-4xl my-5">CRUD Usuarios</h1>
      <hr />
      <Formulario
        agregarUsuario={agregarUsuario}
        usuarioAEditar={usuariosAEditar}
        setUsuarioAEditar={setUsuariosAEditar}
        editarUsuario={editarUsuario}
      />
      <ListadoUsuarios
        usuarios={usuarios}
        borrarUsuario={borrarUsuario}
        setUsuarioAEditar={setUsuariosAEditar}
      />
    </>
  )
}

export default App