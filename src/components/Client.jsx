import React from "react";
import { useNavigate } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
    const { name, company, email, phone, comments, id } = client;

    const navigate = useNavigate();

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3">{name}</td>
            <td className="p-3">
                <p>
                    {" "}
                    <span className="text-gray-800 font-bold">Email:</span>{" "}
                    {email}{" "}
                </p>
                <p>
                    {" "}
                    <span className="text-gray-800 font-bold">
                        Teléfono:
                    </span>{" "}
                    {phone}{" "}
                </p>
            </td>
            <td className="p-3">{company}</td>
            <td className="p-3">
                <button
                    type="button"
                    className="block w-full mb-2 bg-orange-400 p-1 rounded font-semibold hover:bg-orange-200"
                    onClick={() => navigate(`/clients/${id}`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    className="block w-full mb-2 bg-cyan-400 p-1 rounded font-semibold hover:bg-cyan-200"
                    onClick={() => navigate(`/clients/edit/${id}`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="block w-full bg-red-600 p-1 rounded font-semibold hover:bg-red-400"
                    onClick={() => handleDelete(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Client;
