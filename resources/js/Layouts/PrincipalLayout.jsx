import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
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

export default function PrincipalLayout({ auth, header, children }) {
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

            <nav className="shadow-2xl bg-oldwest-brown dark:bg-oldwest-brown border-b border-oldwest-brown dark:border-oldwest-brown">
                <div className="max-w-10xl mx-auto px-2 sm:px-4 lg:px-4">
                    <div className="flex items-center justify-between h-24 ">
                        <div className="flex items-center">
                            <Link href="/inicio">
                                <ApplicationLogoWhite className="block h-24 w-24 mt-1" />
                            </Link>

                            {/* Enlaces de navegación para pantallas grandes */}
                            <div className="hidden xl:flex space-x-14 items-center ml-10">
                                <NavLink
                                    href={route("Inicio")}
                                    active={route().current("Inicio")}
                                >
                                    Inicio
                                </NavLink>
                                <NavLink
                                    href={route("productos.index")}
                                    active={route().current("productos.index")}
                                >
                                    Productos
                                </NavLink>
                                <NavLink
                                    href={route("ofertas.index")}
                                    active={route().current("ofertas.index")}
                                >
                                    Ofertas
                                </NavLink>
                                <NavLink
                                    href={route("Encuentranos")}
                                    active={route().current("Encuentranos")}
                                >
                                    Encuéntranos
                                </NavLink>
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
                                    <Link href="/inicio">
                                        <ApplicationLogoWhite className="h-40 w-40" />
                                    </Link>
                                    <ResponsiveNavLink
                                        href={route("Inicio")}
                                        active={route().current("Inicio")}
                                    >
                                        Inicio
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        href={route("productos.index")}
                                        active={route().current(
                                            "productos.index"
                                        )}
                                    >
                                        Productos
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        href={route("ofertas.index")}
                                        active={route().current(
                                            "ofertas.index"
                                        )}
                                    >
                                        Ofertas
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        href={route("Encuentranos")}
                                        active={route().current("Encuentranos")}
                                    >
                                        Encuéntranos
                                    </ResponsiveNavLink>
                                    {/* Aquí puedes añadir más enlaces si es necesario */}
                                </div>
                            </div>
                        </div>
                        {/* Settings Dropdown */}
                        <div className="font-rye space-x-8 xl:space-x-10 flex flex-wrap items-center">
                            <NavLink
                                href={route("reservas.index")}
                                className="shadow-xl dark:hover:text-white hover:text-white font-bold bg-white hover:bg-oldwest-sand py-2 xl:py-4 px-4 xl:px-6 border-2 border-gold rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-sm xl:text-3xl"
                                style={{ color: "red" }}
                                active={route().current("reservas.index")}
                            >
                                Reservas
                            </NavLink>

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

            {/* Header */}
            {/*} {header && (
                <header className="bg-oldwest-gold dark:bg-oldwest-gold shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )} */}

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
