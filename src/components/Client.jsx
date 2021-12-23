import React from "react";

const Client = ({ client }) => {
    const { name, company, email, phone, comments, id } = client;
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
                <button type="button" className="block w-full mb-2 bg-orange-400 p-1 rounded font-semibold hover:bg-orange-200">Ver</button>
                <button type="button" className="block w-full mb-2 bg-cyan-400 p-1 rounded font-semibold hover:bg-cyan-200">Editar</button>
                <button type="button" className="block w-full bg-red-600 p-1 rounded font-semibold hover:bg-red-400">Eliminar</button>
            </td>
        </tr>
    );
};

export default Client;