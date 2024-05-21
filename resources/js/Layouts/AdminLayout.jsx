// resources/js/Layouts/AdminLayout.jsx

import { useState } from "react";
import ApplicationLogoWhite from "@/Components/ApplicationLogoWhite";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function AdminLayout({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="font-rye min-h-screen flex flex-col bg-wooden-tables dark:bg-wooden-tables">
            <Head>
                <title>¡Bienvenido a Saloon!</title>
                <link
                    rel="icon"
                    href="/images/favicon.ico"
                    type="image/x-icon"
                ></link>
            </Head>

            <nav className="shadow-2xl bg-oldwest-brown dark:bg-oldwest-brown border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-10xl mx-auto px-2 sm:px-4 lg:px-4">
                    <div className="flex items-center justify-between h-24 ">
                        <div className="flex items-center">
                            <Link href="/admin-dashboard">
                                <ApplicationLogoWhite className="block h-24 w-24 mt-1" />
                            </Link>

                            {/* Enlaces de navegación para pantallas grandes */}
                            <div className="hidden xl:flex space-x-14 items-center ml-10">
                                <NavLink
                                    href={route("admin.dashboard")}
                                    active={route().current("admin.dashboard")}
                                >
                                    Calendario
                                </NavLink>
                                {/* Agrega más enlaces de administración aquí */}
                            </div>

                            <div className="xl:hidden flex items-center">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            !showingNavigationDropdown
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-oldwest-gold hover:text-white hover:bg-oldwest-brown focus:outline-none focus:bg-oldwest-brown focus:text-white"
                                >
                                    {/* Icono del menú de hamburguesa */}
                                    <div className="space-y-2">
                                        <div className="w-8 h-0.5 bg-white"></div>
                                        <div className="w-8 h-0.5 bg-white"></div>
                                        <div className="w-8 h-0.5 bg-white"></div>
                                    </div>
                                </button>
                            </div>

                            {/* Menú desplegable para pantallas pequeñas */}
                            <div
                                className={`fixed w-full h-full top-0 left-0 bg-black bg-opacity-75 z-50 ${
                                    showingNavigationDropdown
                                        ? "flex"
                                        : "hidden"
                                }`}
                                onClick={() =>
                                    setShowingNavigationDropdown(false)
                                } // Cierra el menú cuando se clickea fuera de los enlaces
                            >
                                <div
                                    className="px-4 pt-2 pb-4 space-y-1 bg-oldwest-brown sm:space-y-4 menu-desplegable"
                                    onClick={(e) => e.stopPropagation()} // Previene que el evento de clic se propague al contenedor padre
                                >
                                    <Link href="/admin-dashboard">
                                        <ApplicationLogoWhite className="h-40 w-40" />
                                    </Link>
                                    <ResponsiveNavLink
                                        href={route("admin.dashboard")}
                                        active={route().current(
                                            "admin.dashboard"
                                        )}
                                    >
                                        Dashboard
                                    </ResponsiveNavLink>
                                    {/* Agrega más enlaces de administración aquí */}
                                </div>
                            </div>
                        </div>
                        {/* Settings Dropdown */}
                        <div className="font-rye space-x-8 xl:space-x-10 flex flex-wrap items-center">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-full">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center h-12 w-12 xl:h-18 xl:w-18 rounded-full hover:bg-oldwest-red focus:outline-none transition ease-in-out duration-150"
                                            >
                                                <img
                                                    src="/images/logo-login.svg"
                                                    alt="Perfil"
                                                    style={{
                                                        filter: "invert(100%)",
                                                    }}
                                                    className="h-12 w-12 xl:h-18 xl:w-18" // Ajusta el tamaño en XL y más grandes
                                                />
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>
                                    {auth.user ? (
                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Perfil
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Cerrar Sesión
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    ) : (
                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("login")}
                                            >
                                                Iniciar Sesión
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("register")}
                                            >
                                                Registrarse
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    )}
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-oldwest-brown dark:bg-oldwest-brown text-white mt-4">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="mb-4 lg:mb-0">
                            <h2 className="text-lg font-bold">Contacto</h2>
                            <p>Teléfono: 9XX XX XX XX</p>
                            <p>Dirección: Calle Beato Henares nº14</p>
                        </div>

                        <div className="text-sm text-center lg:text-right">
                            <p>
                                &copy; {new Date().getFullYear()} Saloon
                                Cordoba. Todos los derechos reservados.
                            </p>
                        </div>
                        <div className="pt-4 sm:pt-0 flex space-x-6 mb-4 lg:mb-0">
                            <a
                                href="https://twitter.com/SaloonCordoba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 transition-colors duration-300"
                            >
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="h-8 w-8"
                                />
                            </a>
                            <a
                                href="https://instagram.com/SaloonCordoba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 transition-colors duration-300"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="h-8 w-8"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/people/SaloonCordoba/61559849517917/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 transition-colors duration-300"
                            >
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="h-8 w-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
