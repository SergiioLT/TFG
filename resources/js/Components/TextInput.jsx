import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-700 dark:border-gray-700 bg-oldwest-gold dark:bg-oldwest-gold text-white dark:text-white focus:border-oldwest-red dark:focus:border-oldwest-red focus:ring-oldwest-red dark:focus:ring-oldwest-red rounded-md shadow-sm " +
                className
            }
            ref={input}
            style={{ backgroundColor: "#c2a878 !important" }}
        />
    );
});
