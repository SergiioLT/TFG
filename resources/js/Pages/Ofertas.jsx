import PrincipalLayout from "@/Layouts/PrincipalLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import ModalOfertasPersonalizadas from "@/Components/ModalOfertasPersonalizadas";
import { Inertia } from "@inertiajs/inertia";

export default function Ofertas(props) {
    const [selectedCupon, setSelectedCupon] = useState(null);

    const handleCuponClick = (cupon) => {
        setSelectedCupon(cupon);
    };

    const handleCloseModal = () => {
        setSelectedCupon(null);
    };

    const handleUtilizarCupon = () => {
        if (selectedCupon) {
            Inertia.post(
                "/utilizar-cupon",
                { id: selectedCupon.id },
                {
                    onSuccess: () => {
                        handleCloseModal();
                        // Actualiza la vista o muestra un mensaje de éxito
                    },
                }
            );
        }
    };

    const shareOnTwitter = () => {
        axios
            .post("/share/twitter")
            .then((response) => {
                window.open(response.data.twitterUrl, "_blank");
                window.location.reload(); // Esto recargará la página actual
            })
            .catch((errors) => {
                console.error("Error compartiendo en Twitter:", errors);
            });
    };

    const ahora = new Date();
    const inicioMes = new Date(ahora.getFullYear(), ahora.getMonth(), 1);
    const finMes = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0);

    // Verificar si hay un cupón de reseña del mes actual
    const cuponResena = props.ofertasPersonalizadas.find(
        (cupon) =>
            cupon.tipo === "reseña" &&
            new Date(cupon.valido_desde).getMonth() === ahora.getMonth() &&
            new Date(cupon.valido_desde).getFullYear() === ahora.getFullYear()
    );

    // Verificar si hay un cupón de compartir del mes actual
    const cuponCompartir = props.ofertasPersonalizadas.find(
        (cupon) =>
            cupon.tipo === "compartir" &&
            new Date(cupon.valido_desde).getMonth() === ahora.getMonth() &&
            new Date(cupon.valido_desde).getFullYear() === ahora.getFullYear()
    );

    const cuponReserva = props.ofertasPersonalizadas.find(
        (cupon) => cupon.tipo === "reserva" && !cupon.utilizado
    );

    let mensajeCuponResena;
    let mensajeCuponCompartir;

    if (cuponResena) {
        if (cuponResena.utilizado) {
            mensajeCuponResena = `Ya has usado el cupón de reseña este mes. Podrás crear otro a partir del ${finMes.toLocaleDateString()}.`;
        } else {
            mensajeCuponResena = "Haz clic para utilizar tu cupón de reseña.";
        }
    } else {
        mensajeCuponResena = "Crea una reseña para obtener este cupón!";
    }

    if (cuponCompartir) {
        if (cuponCompartir.utilizado) {
            mensajeCuponCompartir = `Ya has usado el cupón de compartir este mes. Podrás crear otro a partir del ${finMes.toLocaleDateString()}.`;
        } else {
            mensajeCuponCompartir =
                "Haz clic para utilizar tu cupón de compartir.";
        }
    } else {
        mensajeCuponCompartir =
            "Comparte nuestra página en Twitter para obtener este cupón!";
    }

    const reservasNoUtilizadas = props.reservasNoUtilizadas || 0;
    const mensajeCuponReserva = `Tienes ${reservasNoUtilizadas}/5 reservas aceptadas!`;

    return (
        <PrincipalLayout
            auth={props.auth}
            header={
                <h2 className="font-semibold text-3xl text-white dark:text-white leading-tight">
                    Ofertas
                </h2>
            }
        >
            <div className="bg-oldwest-brown max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 rounded-lg shadow-lg">
                {/* Bloque de Ofertas Personalizadas */}
                <h3 className="text-3xl font-bold mb-4 text-white dark:text-white pt-10">
                    Ofertas Personalizadas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-6">
                    <div className="bg-oldwest-sand p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Cupón de Reseña
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {mensajeCuponResena}
                        </p>
                        {cuponResena && !cuponResena.utilizado && (
                            <button
                                onClick={() => handleCuponClick(cuponResena)}
                                className="bg-oldwest-brown text-white px-4 py-2 rounded-lg"
                            >
                                Utilizar Cupón
                            </button>
                        )}
                    </div>
                    <div className="bg-oldwest-sand p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Cupón de Reserva
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {cuponReserva
                                ? "Haz clic para utilizar tu cupón de reserva."
                                : mensajeCuponReserva}
                        </p>
                        {cuponReserva && !cuponReserva.utilizado && (
                            <button
                                onClick={() => handleCuponClick(cuponReserva)}
                                className="bg-oldwest-brown text-white px-4 py-2 rounded-lg"
                            >
                                Utilizar Cupón
                            </button>
                        )}
                    </div>
                    <div className="bg-oldwest-sand p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Cupón de Compartir
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {mensajeCuponCompartir}
                        </p>
                        {!cuponCompartir && (
                            <button
                                onClick={shareOnTwitter}
                                className="bg-oldwest-brown text-white px-4 py-2 rounded-lg"
                            >
                                Compartir en Twitter
                            </button>
                        )}
                        {cuponCompartir && !cuponCompartir.utilizado && (
                            <button
                                onClick={() => handleCuponClick(cuponCompartir)}
                                className="bg-oldwest-brown text-white px-4 py-2 rounded-lg"
                            >
                                Utilizar Cupón
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-oldwest-brown max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 rounded-lg shadow-lg">
                {/* Bloque de Ofertas Estándar */}
                <h3 className="text-3xl font-bold mb-4 text-white dark:text-white pt-10">
                    Ofertas Estándar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-6">
                    {props.ofertas.map((oferta) => (
                        <div
                            key={oferta.id}
                            className="bg-oldwest-sand shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105"
                        >
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">
                                    {oferta.titulo}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    {oferta.descripcion}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-semibold">
                                        Descuento: {oferta.valor}%
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        {oferta.tipo_oferta}
                                    </span>
                                </div>
                                <div className="text-gray-500 text-sm mt-2">
                                    <p>
                                        Inicio:{" "}
                                        {new Date(
                                            oferta.fecha_inicio
                                        ).toLocaleDateString()}
                                    </p>
                                    <p>
                                        Fin:{" "}
                                        {new Date(
                                            oferta.fecha_fin
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCupon && (
                <ModalOfertasPersonalizadas onClose={handleCloseModal}>
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Utilizar Cupón
                        </h3>
                        <p className="text-gray-700 mb-4">
                            ¿Estás seguro de que deseas utilizar este cupón?
                        </p>
                        <div className="modal-footer">
                            <button
                                onClick={handleUtilizarCupon}
                                className="bg-oldwest-brown text-white px-4 py-2 rounded-lg mr-2"
                            >
                                Utilizar Cupón
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </ModalOfertasPersonalizadas>
            )}
        </PrincipalLayout>
    );
}
