// resources/js/Pages/Welcome.jsx

import PrincipalLayout from "@/Layouts/PrincipalLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import ModalLogin from "@/Components/ModalLogin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Inicio(props) {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        arrows: false,
    };
    const [modalVisible, setModalVisible] = useState(false);

    const handleTextAreaClick = () => {
        if (!props.auth.user) {
            setModalVisible(true);
        }
    };
    // Define las imágenes del slider
    const images = [
        "/images/picnic-del-desierto.png",
        "/images/cosecha-del-granjero.png",
        "/images/noche-en-el-saloon.png",
    ];
    const { data, setData, post, reset } = useForm({
        mensaje: "",
        puntuacion: 0,
    });

    const submitOpinion = (e) => {
        e.preventDefault();
        if (props.auth.user) {
            Inertia.post(
                "/inicio",
                {
                    puntuacion: data.puntuacion,
                    mensaje: data.mensaje,
                    user_id: props.auth.user.id, // Asegúrate de que el usuario esté autenticado y tenga un ID
                },
                {
                    onSuccess: () => {
                        reset(); // Reinicia el formulario
                    },
                }
            );
        } else {
            alert("Debes estar registrado para enviar una opinión.");
        }
    };

    return (
        <PrincipalLayout
            auth={props.auth}
            header={
                <h2 className="font-cormorant text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
            }
        >
            <div className="text-center py-20 banner-inicio xl:bg-center bg-center">
                <h1 className="text-6xl text-white mb-4">
                    ¡Bienvenido a Saloon Córdoba!
                </h1>
                <p className="text-xl text-white mb-8">
                    Descubre nuestros menús especiales y disfruta con todos tus
                    sentidos.
                </p>
                <Link
                    href={route("reservas.index")}
                    className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                >
                    Haz tu reserva
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:min-h-80">
                <div
                    className="sm:w-1/3 bg-cover bg-bottom min-h-80 flex justify-end text-center flex-col"
                    style={{
                        backgroundImage:
                            "url('/images/fiesta-de-la-frontera.png')",
                    }}
                >
                    <div className="text-white text-lg  p-4">
                        <Link
                            href={route("productos.index")}
                            className="inline-block bg-red-600 text-white  py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                        >
                            Entrantes ⬈
                        </Link>
                    </div>
                </div>
                <div
                    className="sm:w-1/3 bg-cover bg-bottom min-h-80 flex justify-end text-center flex-col"
                    style={{
                        backgroundImage: "url('/images/asado-del-vaquero.png')",
                    }}
                >
                    <div className="text-white text-lg p-4">
                        <Link
                            href={route("productos.index")}
                            className="inline-block bg-red-600 text-white  py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                        >
                            Primeros ⬈
                        </Link>
                    </div>
                </div>
                <div
                    className="sm:w-1/3 bg-cover bg-bottom min-h-80 flex justify-end text-center flex-col"
                    style={{
                        backgroundImage:
                            "url('/images/desayuno-del-pistolero.png')",
                    }}
                >
                    <div className="text-white text-lg p-4">
                        <Link
                            href={route("productos.index")}
                            className="inline-block bg-red-600 text-white  py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                        >
                            Desayunos ⬈
                        </Link>
                    </div>
                </div>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div key={idx}>
                            <img
                                src={img}
                                alt={`Slide ${idx}`}
                                className="slider-image object-bottom"
                                draggable="false"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="py-12 font-rye">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-oldwest-sand dark:bg-oldwest-sand overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="opinion-section mt-8 m-8">
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold mb-4">
                                    Dejános tu opinión!{" "}
                                </h2>
                                <form onSubmit={submitOpinion} className="mt-4">
                                    <textarea
                                        className="form-input w-full"
                                        placeholder="Escribe tu opinión aquí..."
                                        value={data.mensaje}
                                        onChange={(e) =>
                                            setData("mensaje", e.target.value)
                                        }
                                        onFocus={handleTextAreaClick}
                                        readOnly={!props.auth.user}
                                    />
                                    <ReactStars
                                        count={5}
                                        value={data.puntuacion}
                                        onChange={(newValue) =>
                                            setData("puntuacion", newValue)
                                        }
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-oldwest-red hover:bg-oldwest-brown text-white py-2 px-4 rounded"
                                    >
                                        Enviar Opinión
                                    </button>
                                </form>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">
                                Opiniones de otros Sheriffs
                            </h2>
                            {props.opiniones.map((opinion, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow rounded-lg p-4 mb-4"
                                >
                                    <p className="text-gray-800 text-lg">
                                        {opinion.mensaje}
                                    </p>
                                    <ReactStars
                                        value={opinion.puntuacion}
                                        edit={false}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                    <div className="text-sm text-gray-600">
                                        {opinion.user.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {modalVisible && (
                <ModalLogin onClose={() => setModalVisible(false)} />
            )}
        </PrincipalLayout>
    );
}
