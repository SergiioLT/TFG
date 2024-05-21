// resources/js/Pages/AdminDashboard.jsx

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import ModalCalendario from "@/Components/ModalCalendario";

export default function AdminDashboard({ auth, reservas }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedReserva, setSelectedReserva] = useState(null);

    const openModal = (reserva) => {
        setSelectedReserva(reserva);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedReserva(null);
        setModalIsOpen(false);
    };

    const events = reservas.map((reserva) => ({
        title: `${reserva.user.name} (${reserva.numero_personas} personas)`,
        start: reserva.fecha_hora,
        extendedProps: {
            estado: reserva.estado,
            notas: reserva.notas,
            reserva_id: reserva.reserva_id,
        },
        reserva,
    }));

    return (
        <AdminLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Calendario de Reservas
                </h2>
            }
        >
            <Head title="Calendario de Reservas" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-oldwest-brown overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                initialView="dayGridMonth"
                                locale={esLocale}
                                events={events}
                                headerToolbar={{
                                    left: "prev,next today",
                                    center: "title",
                                    right: "dayGridMonth,dayGridWeek,dayGridDay",
                                }}
                                eventClick={(info) =>
                                    openModal(info.event.extendedProps.reserva)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ModalCalendario
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                reserva={selectedReserva}
            />
        </AdminLayout>
    );
}
