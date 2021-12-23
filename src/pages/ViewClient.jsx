import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const ViewClient = () => {
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

    return loading ? (
        <Spinner />
    ) : Object.keys(client).length === 0 ? (
        <p>No hay resultados</p>
    ) : (
        <div>
            <h1 className="text-5xl font-bold text-orange-500">
                Ver cliente:{" "}
                <span className="text-gray-600">{client.name}</span>
            </h1>
            <p className="mt-10 text-3xl">Información del cliente:</p>
            <p className="text-xl text-gray-800 mt-10">
                <span className="font-bold ">Cliente: </span>
                {client.name}
            </p>
            <p className="text-xl text-gray-800 mt-4 ">
                <span className="font-bold ">Email: </span>
                {client.email}
            </p>

            {client.phone && (
                <p className="text-xl text-gray-800 mt-4 ">
                    <span className="font-bold ">Teléfono: </span>
                    {client.phone}
                </p>
            )}

            <p className="text-xl text-gray-800 mt-4 ">
                <span className="font-bold ">Compañía: </span>
                {client.company}
            </p>

            {client.comments && (
                <p className="text-xl text-gray-800 mt-4 ">
                    <span className="font-bold ">Comentarios: </span>
                    {client.comments}
                </p>
            )}
        </div>
    );
};

export default ViewClient;
