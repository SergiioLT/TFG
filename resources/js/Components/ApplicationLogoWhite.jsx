export default function ApplicationLogoWhite(props) {
    return (
        <img
            src="/images/logo-web.svg" // Reemplaza con el nombre correcto de tu archivo
            alt="Logo"
            style={{ filter: "invert(100%)" }}
            {...props}
        />
    );
}
