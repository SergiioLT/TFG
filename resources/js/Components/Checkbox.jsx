export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded bg-oldwest-gold dark:bg-oldwest-gold border-gray-700 dark:border-gray-700 text-oldwest-red shadow-sm focus:ring-oldwest-red dark:focus:ring-oldwest-red focus:ring-offset-gray-800 dark:focus:ring-offset-gray-800 " +
                className
            }
        />
    );
}
