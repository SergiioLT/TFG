import PrincipalLayout from "@/Layouts/PrincipalLayout";
import { Head, usePage } from "@inertiajs/react";
import ModalMenu from "@/Components/ModalMenu";
import React, { useState, useEffect } from "react";

export default function Productos(props) {
    const { category } = usePage().props;

    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(
        category || "desayunos"
    );

    useEffect(() => {
        if (category) {
            setSelectedCategory(category);
        }
    }, [category]);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleCloseModal = () => {
        setSelectedMenu(null);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const groupedMenus = props.menus.reduce((acc, menu) => {
        const { tipo_menu } = menu;
        if (!acc[tipo_menu]) {
            acc[tipo_menu] = [];
        }
        acc[tipo_menu].push(menu);
        return acc;
    }, {});

    const categoriesOrder = ["desayunos", "entrantes", "primeros"];

    return (
        <PrincipalLayout
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Bienvenido
                </h2>
            }
        >
            <div className="flex flex-col items-center mt-10">
                <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
                    <div className="flex justify-start space-x-2">
                        {categoriesOrder.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-t-lg text-sm sm:text-base lg:text-2xl ${
                                    selectedCategory === category
                                        ? "bg-oldwest-brown text-white"
                                        : "bg-oldwest-sand text-oldwest-brown"
                                } whitespace-nowrap`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="w-full border-t-4 border-oldwest-brown rounded-b-lg p-4 bg-oldwest-brown shadow-lg mx-auto">
                        <div className="font-rye flex items-center flex-col sm:flex-row flex-wrap justify-center gap-20 p-6">
                            {groupedMenus[selectedCategory]?.map((menu) => (
                                <div
                                    key={menu.menu_id}
                                    className="w-full sm:w-96 bg-oldwest-sand shadow-2xl rounded-lg overflow-hidden cursor-pointer"
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
                    </div>
                </div>
            </div>

            {selectedMenu && (
                <ModalMenu menu={selectedMenu} onClose={handleCloseModal} />
            )}
        </PrincipalLayout>
    );
}
