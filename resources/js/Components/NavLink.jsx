import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 font-rye text-3xl leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "pb-2 border-oldwest-red dark:border-oldwest-red text-white dark:text-white focus:border-oldwest-red "
                    : "pb-2 border-transparent text-white dark:text-white hover:text-gray-300 dark:hover:text-gray-300 hover:border-oldwest-red dark:hover:border-oldwest-red focus:text-gray-300 dark:focus:text-gray-300 focus:border-oldwest-sand dark:focus:border-oldwest-sand ") +
                className
            }
        >
            {children}
        </Link>
    );
}
