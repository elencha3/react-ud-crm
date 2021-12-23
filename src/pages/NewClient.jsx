import React from 'react'
import FormNewClient from '../components/FormNewClient'

const NewClient = () => {
    return (
        <>
            <h1 className='text-5xl font-bold text-orange-500'>Nuevo Cliente</h1>
            <p className='mt-3'>Rellena los siguientes campos para agregar un nuevo cliente</p>
            <FormNewClient/>
        </>
    )
}

export default NewClient
