import React from "react";
import { Formik, Form, Field } from "formik";
import Alert from "./Alert";
import * as Yup from "yup";

const FormNewClient = () => {
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

    const handleSubmit = (values) => {};

    return (
        <div className="mt-10 px-5 py-10 rounded-md bg-orange-200 shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-800 font-bold text-xl text-center uppercase">
                Agregar nuevo cliente
            </h1>

            <Formik
                initialValues={{
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    comments: "",
                }}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
                validationSchema={newClientSchema}
            >
                {({ errors, touched }) => {
                    console.log(errors);
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
                                value="Agregar cliente"
                                className="mt-5 w-full bg-orange-500 p-3 text-gray-800 rounded font-bold text-lg"
                            />
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default FormNewClient;
