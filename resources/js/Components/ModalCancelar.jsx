// src/Components/ModalCancelar.jsx
import React from "react";

export default function ModalCancelar({
    isVisible,
    title,
    content,
    onConfirm,
    onClose,
}) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-oldwest-sand rounded-lg p-8 shadow-lg z-50">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="mb-4">{content}</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="bg-white text-black font-bold py-2 px-4 rounded focus:outline-none"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}
