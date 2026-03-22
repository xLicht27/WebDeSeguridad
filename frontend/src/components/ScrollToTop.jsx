import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const prevPath = useRef(pathname);

    useEffect(() => {
        // Chequeamos si la ruta anterior Y la nueva son de servicios
        const saltoEntreServicios =
            pathname.toLowerCase().includes('/servicios') &&
            prevPath.current.toLowerCase().includes('/servicios');

        // Si NO es un salto entre servicios, entonces subimos arriba
        if (!saltoEntreServicios) {
            window.scrollTo(0, 0);
        }

        // Actualizamos la ruta anterior para el próximo cambio
        prevPath.current = pathname;
    }, [pathname]);

    return null;
}
