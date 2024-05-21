import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrincipalLayout from "@/Layouts/PrincipalLayout";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import ModalReserva from "@/Components/ModalReserva";
import ModalLoginReserva from "@/Components/ModalLoginReserva";
import ModalCancelar from "@/Components/ModalCancelar";

export default function Reservas(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [personas, setPersonas] = useState(2);
    const [hora, setHora] = useState("");

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showModalCancelar, setShowModalCancelar] = useState(false);
    const [message, setMessage] = useState("");
    const [reservaToCancel, setReservaToCancel] = useState(null);
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            setShowSuccessModal(true);
            setMessage(flash.success);
        }
        if (flash.error) {
            setShowErrorModal(true);
            setMessage(flash.error);
        }
    }, [flash]);

    const isSunday = (date) => {
        return date.getDay() === 0;
    };

    const handleInteraction = (e) => {
        if (!props.auth.user) {
            e.preventDefault();
            setShowLoginModal(true);
        }
    };

    const cancelarReserva = (id) => {
        Inertia.delete(`/reservas/${id}`, {
            preserveScroll: true,
            onSuccess: () => {
                // Opcional: actualiza el estado o haz algo tras cancelar la reserva
            },
        });
    };

    const handleCancelClick = (reserva) => {
        setReservaToCancel(reserva);
        setShowModalCancelar(true);
    };

    const handleConfirmCancel = () => {
        cancelarReserva(reservaToCancel.reserva_id);
        setShowModalCancelar(false);
    };

    const generateTimes = () => {
        const times = [];
        for (let hour = 8; hour <= 23; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const timeString = `${hour}:${minute
                    .toString()
                    .padStart(2, "0")}`;
                times.push(timeString);
            }
        }
        return times;
    };
    const times = generateTimes();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!props.auth.user) {
            setShowLoginModal(true);
            return;
        }

        const fechaHora = `${startDate.toISOString().slice(0, 10)} ${hora}:00`;

        Inertia.post(
            "/reservas",
            {
                fecha_hora: fechaHora,
                numero_personas: personas,
                user_id: props.auth.user.id,
            },
            {
                onSuccess: (response) => {
                    setMessage(response.props.flash.success);
                    setShowSuccessModal(true);
                },
                onError: (errors) => {
                    if (errors.response && errors.response.status === 409) {
                        setMessage(errors.response.data.message);
                        setShowErrorModal(true);
                    }
                },
            }
        );
    };

    return (
        <PrincipalLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Reservas
                </h2>
            }
        >
            <div className="flex lg:flex-row pt-12 flex-col">
                <div className="flex flex-col items-center sm:w-full">
                    <div className="flex-col p-8 mb-20 lg:mb-40 h-1/3">
                        <div className="bg-oldwest-sand shadow-2xl rounded shadow-black px-8 border-4 border-oldwest-brown">
                            <h1 className="font-rye bg-oldwest-sand text-2xl text-oldwest-brown m-2 text-center">
                                ¿Cuándo vienes?
                            </h1>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-oldwest-sand shadow-2xl rounded px-8 pt-6 pb-8 shadow-black border-4 border-oldwest-brown"
                        >
                            <div className="mb-4" onClick={handleInteraction}>
                                <DatePicker
                                    className="form-input mt-1 w-full"
                                    selected={startDate}
                                    filterDate={(date) => !isSunday(date)}
                                    onChange={(date) => setStartDate(date)}
                                    minDate={new Date()}
                                />
                            </div>

                            <div className="mb-4" onClick={handleInteraction}>
                                <select
                                    className="form-select mt-1 block w-full"
                                    value={personas}
                                    onChange={(e) =>
                                        setPersonas(e.target.value)
                                    }
                                >
                                    {[...Array(10).keys()].map((n) => (
                                        <option key={n + 1} value={n + 1}>
                                            {n + 1} persona{n > 0 ? "s" : ""}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4" onClick={handleInteraction}>
                                <select
                                    className="form-select mt-1 block w-full"
                                    value={hora}
                                    onChange={(e) => setHora(e.target.value)}
                                >
                                    {times.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-oldwest-brown hover:bg-oldwest-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Reservar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="font-rye text-oldwest-brown pl-14 mt-8 p-8 mb-40 lg:mb-0 bg-oldwest-sand shadow-2xl rounded shadow-black border-4 border-oldwest-brown ">
                        <h2 className="text-xl font-bold mb-4">
                            Encuéntranos en:
                        </h2>
                        <p>Calle Beato Henares nº 14</p>
                        <h2 className="text-xl font-bold mb-4 pt-4">Horario</h2>
                        <p className="text-lg">
                            Lunes a sábado: <b>8:00 a 00:00</b>
                        </p>
                    </div>
                </div>
                <div className="reservas-poster">
                    <div className="reservas-container">
                        {props.auth.user && (
                            <p className="reserva-info xl:text-xl lg:text-lg">
                                Tus reservas:
                            </p>
                        )}
                        {props.reservas &&
                            props.reservas.map((reserva) => (
                                <div
                                    key={reserva.reserva_id}
                                    className="font-rye reserva-info xl:text-lg lg:text-lg"
                                >
                                    <p>
                                        Fecha:{" "}
                                        {reserva.fecha_hora.split(" ")[0]}
                                    </p>
                                    <p>
                                        Hora:{" "}
                                        {reserva.fecha_hora
                                            .split(" ")[1]
                                            .substring(0, 5)}
                                    </p>
                                    <p>
                                        Número de Personas:{" "}
                                        {reserva.numero_personas}
                                    </p>
                                    <button
                                        onClick={() =>
                                            handleCancelClick(reserva)
                                        }
                                        className="cancel-button"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <ModalReserva
                isVisible={showSuccessModal || showErrorModal}
                title={showSuccessModal ? "Éxito" : "Error"}
                content={message}
                onClose={() => {
                    setShowSuccessModal(false);
                    setShowErrorModal(false);
                }}
            />
            <ModalLoginReserva
                onClose={() => setShowLoginModal(false)}
                isVisible={showLoginModal}
            />
            <ModalCancelar
                isVisible={showModalCancelar}
                title="Confirmar Cancelación"
                content="¿Estás seguro de que quieres cancelar esta reserva?"
                onConfirm={handleConfirmCancel}
                onClose={() => setShowModalCancelar(false)}
            />
        </PrincipalLayout>
    );
}
