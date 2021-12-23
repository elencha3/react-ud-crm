import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormNewClient from '../components/FormNewClient'



const EditClient = () => {
    const { id } = useParams();
    const [client, setClient] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getClient = async () => {
            try {
                const url = `http://localhost:4000/clients/${id}`;
                const response = await fetch(url);
                const result = await response.json();
                setClient(result);
            } catch (error) {}

            setLoading(!loading);
        };

        getClient();
    }, []);
    return (
        <div>
            <h1 className='text-5xl font-bold text-orange-500'>Editar Cliente</h1>
            <p className='mt-3'>Edita el cliente con este formulario</p>
            
            {client?.name ? (
                <FormNewClient
                client= {client}
                loading = {loading}
                setLoading = {setLoading}
            />
            ): <p>Cliente ID no válido</p>}
            
        </div>
    )
}

export default EditClient
