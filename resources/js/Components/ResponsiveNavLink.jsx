import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`font-rye w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? "border-oldwest-sand dark:border-oldwest-sand text-black dark:text-white bg-oldwest-sand dark:bg-oldwest-sand/50 focus:text-black dark:focus:text-black focus:bg-oldwest-sand dark:focus:bg-oldwest-sand focus:border-oldwest-sand dark:focus:border-oldwest-sand"
                    : "border-transparent text-white dark:text-white hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-oldwest-sand hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
