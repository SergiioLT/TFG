export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded dark:bg-oldwest-gold border-gray-300 dark:border-gray-700 text-oldwest-red shadow-sm focus:ring-oldwest-red dark:focus:ring-oldwest-red dark:focus:ring-offset-gray-800 " +
                className
            }
        />
    );
}
