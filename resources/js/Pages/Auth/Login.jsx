import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import NavLink from "@/Components/NavLink";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
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

                <div className="mt-4">
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
                </div>

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

                <div className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-white dark:text-whitehover:text-white dark:hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-oldwest-red focus:ring-oldwest-red dark:focus:ring-oldwest-red"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    )} */}

                    <PrimaryButton className="ms-4" disabled={processing}>
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
        </GuestLayout>
    );
}
