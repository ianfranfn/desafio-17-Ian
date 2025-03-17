import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from "../components/Spinner"

const UsuariosDetalle = () => {

    const {id} = useParams()

    const [usuarioDetalle, setUsuarioDetalle] = useState(null)

    useEffect(() => {

        getOne(id)
    }, [])

    const getOne = async (id) => {
        const urlGetOne = import.meta.env.VITE_BACKEND + id

        try{
            const res = await fetch(urlGetOne)

            if(!res.ok){
                throw new Error('No se pudo obtener el usuario')
            }
            const data = await res.json()
            setUsuarioDetalle(data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
    <h1>Usuario Detalle</h1>

    {
        usuarioDetalle ? 
        (
            <>
            <h2>El nombre y apellido del usuario: {usuarioDetalle.nombre} {usuarioDetalle.apellido}</h2>
            <p>La edad del usuario es: {usuarioDetalle.edad}</p>
            <p>Su puesto laboral es: {usuarioDetalle.puesto}</p>
            </> 
        ) :
        (
            <Spinner />
        )
    }
    </>
  )
}

export default UsuariosDetalle