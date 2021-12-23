import { useState, useEffect } from "react";
import Client from "../components/Client";

const Home = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const getClients = async () => {
            try {
                const url = "http://localhost:4000/clients";
                const response = await fetch(url);
                const result = await response.json();
                setClients(result);
            } catch (error) {}
        };

        getClients();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = confirm('¿Deseas eliminar al cliente?');

        if(confirmDelete) {
            try {
                const url = `http://localhost:4000/clients/${id}`
                const response = await fetch(url, {
                    method: 'DELETE'
                })
                await response.json()
                const clientsArray = clients.filter(client => client.id !== id)
                setClients(clientsArray)
            } catch (error) {
                console.log(error)
            }
        }
    };
    return (
        <>
            <h1 className="text-5xl font-bold text-orange-500">Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>
            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className="bg-orange-200 text-gray-800">
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Compañía</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {clients.map((client) => (
                        <Client
                            key={client.id}
                            client={client}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Home;
