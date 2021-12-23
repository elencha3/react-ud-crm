import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import Spinner from "./Spinner";
import * as Yup from "yup";

const FormNewClient = ({ client, loading, setLoading }) => {
    const navigate = useNavigate();

    // Validación del formulario. creamos dentr del componente Formik validationSchema y le
    // pasamos una función. Yup.object().shape() y definimos validaciones para cada campo.
    const newClientSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "El nombre es muy corto")
            .max(20, "El nombre es muy largo")
            .required("El nombre del cliente es obligatorio"),
        company: Yup.string().required(
            "El nombre de la empresa es obligatorio"
        ),
        email: Yup.string()
            .email("Introduce un email válido")
            .required("El email es obligatorio"),
        phone: Yup.number()
            .positive("Número no válido")
            .integer("Número no válido")
            .typeError("El número no es válido"),
        comments: "",
    });

    const handleSubmit = async (values) => {
        try {
            let response;
            if (client.id) {
                // Editando un registro
                const url = `http://localhost:4000/clients/${client.id}`;
                response = await fetch(url, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } else {
                // Nuevo Registro
                const url = "http://localhost:4000/clients";
                response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }

            await response.json();
            navigate("/clients");
        } catch (error) {
            console.log(error);
        }
    };

    return loading ? (
        <Spinner />
    ) : (
        <div className="mt-10 px-5 py-10 rounded-md bg-orange-200 shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-800 font-bold text-xl text-center uppercase">
                {client?.name ? "Editar cliente" : "Agregar nuevo cliente"}
            </h1>

            <Formik
                initialValues={{
                    name: client?.name ?? "",
                    company: client?.company ?? "",
                    email: client?.email ?? "",
                    phone: client?.phone ?? "",
                    comments: client?.comments ?? "",
                }}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values);
                    resetForm();
                }}
                validationSchema={newClientSchema}
            >
                {({ errors, touched }) => {
                    return (
                        <Form className="mt-10">
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="text-gray-800 font-semibold"
                                >
                                    Nombre:
                                </label>
                                <Field
                                    id="name"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50 rounded"
                                    placeholder="Nombre de cliente"
                                    name="name"
                                />
                                {errors.name && touched.name ? (
                                    <Alert>{errors.name}</Alert>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="company"
                                    className="text-gray-800 font-semibold"
                                >
                                    Empresa:
                                </label>
                                <Field
                                    id="company"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50 rounded"
                                    placeholder="Nombre de la empresa"
                                    name="company"
                                />
                                {errors.company && touched.company ? (
                                    <Alert>{errors.company}</Alert>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="text-gray-800 font-semibold"
                                >
                                    Nombre:
                                </label>
                                <Field
                                    id="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-gray-50 rounded"
                                    placeholder="Email del cliente"
                                    name="email"
                                />
                                {errors.email && touched.email ? (
                                    <Alert>{errors.email}</Alert>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="text-gray-800 font-semibold"
                                >
                                    Teléfono:
                                </label>
                                <Field
                                    id="phone"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-50 rounded"
                                    placeholder="Teléfono del cliente"
                                    name="phone"
                                />
                                {errors.phone && touched.phone ? (
                                    <Alert>{errors.phone}</Alert>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="comments"
                                    className="text-gray-800 font-semibold"
                                >
                                    Nombre:
                                </label>
                                <Field
                                    as="textarea"
                                    id="comments"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50 rounded h-40"
                                    placeholder="Notas del cliente"
                                    name="comments"
                                />
                            </div>

                            <input
                                type="submit"
                                value={
                                    client?.name
                                        ? "Editar cliente"
                                        : "Agregar nuevo cliente"
                                }
                                className="mt-5 w-full bg-orange-500 p-3 text-gray-800 rounded font-bold text-lg cursor-pointer"
                            />
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

FormNewClient.defaultProps = {
    client: {},
    loading: false,
};
export default FormNewClient;
