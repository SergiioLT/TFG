export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-oldwest-gold dark:bg-oldwest-gold border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-oldwest-red focus:bg-gray-700 dark:focus:bg-oldwest-red active:bg-oldwest-red dark:active:bg-oldwest-red focus:outline-none focus:ring-2 focus:ring-oldwest-red focus:ring-oldwest-red dark:focus:ring-oldwest-red transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
