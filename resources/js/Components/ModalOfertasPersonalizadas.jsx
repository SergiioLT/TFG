import React from "react";

const ModalOfertasPersonalizadas = ({ onClose, children }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                {children}
                <div className="modal-footer"></div>
            </div>
        </div>
    );
};

export default ModalOfertasPersonalizadas;
