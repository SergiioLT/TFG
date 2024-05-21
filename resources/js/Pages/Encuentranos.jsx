// resources/js/Pages/Welcome.jsx

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import PrincipalLayout from "@/Layouts/PrincipalLayout";
import { Head } from "@inertiajs/react";

// Establece tu configuración de estilo para el mapa
const containerStyle = {
    width: "100%",
    height: "400px",
};

// Centra el mapa en la ubicación deseada
const center = {
    lat: 37.8688,
    lng: -4.7747,
};

export default function Inicio(props) {
    //const apiKey = "AIzaSyBTolgXG4EphMPbRIIyyY2l0WwqXuVhnl0";
    return (
        <PrincipalLayout
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Encuéntranos
                </h2>
            }
        >
            {/*}
            <div className="py-12">
                <div className="max-w-7xl min-h-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-oldwest-brown overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Google Map
                            <LoadScript googleMapsApiKey="AIzaSyBTolgXG4EphMPbRIIyyY2l0WwqXuVhnl0">
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={14}
                                >
                                    <Marker position={center} />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </div>
                </div>
            </div>
        */}
        </PrincipalLayout>
    );
}
