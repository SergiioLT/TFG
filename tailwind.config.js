import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                // Estos son ejemplos de nombres de colores, puedes cambiarlos como quieras.
                'oldwest-brown': '#31180E', // Un marrón tierra
                'oldwest-brown-light': '#7b4b2a', // Un marrón tierra
                'oldwest-beige': '#f5f5dc', // Un beige claro
                'oldwest-red': '#a7552c', // Un rojo tierra
                'oldwest-sand': '#e0cba8', // Un marrón arenoso
                'oldwest-gold': '#c2a878', // Un dorado pálido
                // Añade más colores según lo necesites
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                cormorant : ['"Cormorant Garamond"', 'serif'],
                rye : ['"Rye"', 'serif'],
            },
        },
    },

    plugins: [forms],
};
