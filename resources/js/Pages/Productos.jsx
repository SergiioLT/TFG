// resources/js/Pages/Welcome.jsx

import PrincipalLayout from "@/Layouts/PrincipalLayout";
import { Head } from "@inertiajs/react";
import ModalMenu from "@/Components/ModalMenu";
import React, { useState } from "react";

export default function Inicio(props) {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleCloseModal = () => {
        setSelectedMenu(null);
    };

    return (
        <PrincipalLayout
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Bienvenido
                </h2>
            }
        >
            <div className="font-rye flex items-center flex-col sm:flex-row flex-wrap justify-center gap-20 p-6">
                {props.menus.map((menu) => (
                    <div
                        key={menu.menu_id}
                        className="size-auto sm:size-96 bg-oldwest-sand shadow-2xl rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => handleMenuClick(menu)}
                    >
                        <img
                            src={menu.URL}
                            alt={menu.nombre}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">
                                {menu.nombre} - {menu.precio}€
                            </h3>
                            <p className="text-lg text-oldwest-brown">
                                {menu.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedMenu && (
                <ModalMenu menu={selectedMenu} onClose={handleCloseModal} />
            )}
        </PrincipalLayout>
    );
}
