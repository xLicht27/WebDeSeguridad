import { useEffect, useRef } from 'react';

export default function FadeIn({ children }) {
    // 1. Creamos una "referencia" al cajón del HTML
    const domRef = useRef();

    // 2. Encendemos el observador estilo React
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Descomenta la siguiente línea si SÓLO quieres que aparezca la primera vez
                    // observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        const { current } = domRef;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    // 3. Devolvemos el HTML con la clase "fade-in" original de tu CSS
    return (
        <div className="fade-in" ref={domRef}>
            {children}
        </div>
    );
}
