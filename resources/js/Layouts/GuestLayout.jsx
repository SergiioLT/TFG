import ApplicationLogo from "@/Components/ApplicationLogo";
import ApplicationLogoWhite from "@/Components/ApplicationLogoWhite";
import { Link, Head } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="font-rye min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-wooden-tables dark:bg-wooden-tables">
            <Head>
                <title>¡Bienvenido a Saloon!</title>
                <link
                    rel="icon"
                    href="/images/favicon.ico"
                    type="image/x-icon"
                ></link>
            </Head>
            <div>
                <Link href="/">
                    <ApplicationLogoWhite className="h-80 w-80 fill-current text-white" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-oldwest-brown dark:bg-oldwest-brown shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
