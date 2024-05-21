import React from "react";

const ModalMenu = ({ menu, onClose }) => {
    if (!menu) return null;

    const getImageForAllergen = (allergenName) => {
        switch (allergenName.toLowerCase()) {
            case "huevos":
                return "/images/logo-huevos.svg";
            case "gluten":
                return "/images/logo-gluten.svg";
            case "lácteos":
                return "/images/logo-lacteos.svg";
            case "nueces":
                return "/images/logo-nueces.svg";
            default:
                return "/images/default.svg"; // Imagen por defecto
        }
    };

    const uniqueAllergens = (plato) => {
        const allergensSet = new Set();
        plato.ingredientes.forEach((ingrediente) => {
            ingrediente.alergenos.forEach((alergeno) => {
                allergensSet.add(alergeno.nombre);
            });
        });
        return Array.from(allergensSet);
    };

    return (
        <div className="font-rye fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-oldwest-sand p-4 rounded-lg max-w-xl min-h-96">
                <button onClick={onClose} className="float-right font-bold">
                    X
                </button>
                <img
                    src={menu.URL}
                    alt={menu.nombre}
                    className="w-full h-66 object-cover object-bottom"
                />
                <h3 className="text-2xl font-bold mb-2 mt-2">
                    {menu.nombre} - {menu.precio}€
                </h3>
                <p className="mb-4">{menu.descripcion}</p>
                <ul>
                    {menu.platos.map((plato) => (
                        <li key={plato.plato_id}>
                            <p className="leading-relaxed p-3">
                                <b>{plato.nombre}</b> - {plato.descripcion}
                                <ul>
                                    {uniqueAllergens(plato).map(
                                        (alergenoName) => (
                                            <li key={alergenoName}>
                                                <img
                                                    src={getImageForAllergen(
                                                        alergenoName
                                                    )}
                                                    alt={alergenoName}
                                                    className="w-10 h-10"
                                                />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ModalMenu;
