// resources/js/Components/ModalCalendario.jsx

import React from "react";
import Modal from "react-modal";
import { Inertia } from "@inertiajs/inertia";

Modal.setAppElement("#app"); // Asegúrate de que esto coincida con el id del elemento root en tu HTML

const ModalCalendario = ({ isOpen, onRequestClose, reserva }) => {
    const handleAccept = () => {
        Inertia.post(`/reservas/${reserva.reserva_id}/accept`, {
            onFinish: () => onRequestClose(),
        });
    };

    if (!reserva) {
        return null;
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Reserva Modal"
            className="modal-calendario"
            overlayClassName="overlay"
        >
            <div>
                <h2>{reserva.user.name}</h2>
                <p>
                    <strong>Fecha y Hora:</strong>{" "}
                    {new Date(reserva.fecha_hora).toLocaleString()}
                </p>
                <p>
                    <strong>Número de Personas:</strong>{" "}
                    {reserva.numero_personas}
                </p>
                <p>
                    <strong>Estado:</strong> {reserva.estado}
                </p>
                <p>
                    <strong>Notas:</strong> {reserva.notas}
                </p>
                <div className="modal-buttons">
                    <button
                        onClick={onRequestClose}
                        className="btn btn-secondary"
                    >
                        Cancelar
                    </button>
                    <button onClick={handleAccept} className="btn btn-primary">
                        Aceptar
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalCalendario;
