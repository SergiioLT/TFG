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
                    ? "border-oldwest-sand dark:border-oldwest-sand text-black dark:text-black bg-oldwest-sand dark:bg-oldwest-sand focus:text-black dark:focus:text-black focus:bg-oldwest-sand dark:focus:bg-oldwest-sand focus:border-oldwest-sand dark:focus:border-oldwest-sand"
                    : "border-transparent text-white dark:text-white hover:text-gray-800 dark:hover:text-black hover:bg-oldwest-sand dark:hover:bg-oldwest-sand hover:border-black dark:hover:border-black focus:text-white dark:focus:text-white focus:bg-oldwest-gold dark:focus:bg-oldwest-gold focus:border-black dark:focus:border-black"
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
