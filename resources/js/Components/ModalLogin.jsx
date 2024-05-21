import React from "react";
import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import NavLink from "@/Components/NavLink";
import { Head, Link, useForm } from "@inertiajs/react";

const ModalLogin = ({ onClose }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(route("login")); // Asegúrate de que esta es la ruta correcta
        post(route("login"), {
            onSuccess: () => onClose(),
            onError: (errors) => console.log(errors),
        });
    };

    return (
        <div className="font-rye fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-oldwest-brown p-4 rounded-lg">
                <form onSubmit={submit} className="space-y-4">
                    <h2 className="text-lg text-white">
                        Inicia sesión para dejar una reseña
                    </h2>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-white dark:text-white">
                                Recuerdame
                            </span>
                        </label>
                    </div>
                    <div className="flex justify-center mt-4">
                        <PrimaryButton onClick={onClose}>
                            Cancelar
                        </PrimaryButton>
                        <PrimaryButton
                            className="ms-4 justify-end"
                            disabled={processing}
                        >
                            Entrar
                        </PrimaryButton>
                    </div>
                </form>
                <div className="text-sm text-center dark:text-white text-white w-full sm:max-w-md px-6 py-4 bg-oldwest-brown dark:bg-oldwest-brown sm:rounded-lg">
                    ¿No tienes una cuenta?
                    <Link
                        href={route("register")}
                        className="underline hover:underline underline-offset-1"
                    >
                        {" "}
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;
