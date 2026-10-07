import { useEffect } from 'react';

const SITIO = 'PRESER SEGURIDAD S.A.C.';

/**
 * Define título y meta description de cada página (antes todo el sitio
 * compartía el mismo <title> del index.html).
 *
 * Uso: useSeo({ title: 'Custodia de Mercadería', description: '...' })
 */
function setMeta(nombre, contenido) {
    if (!contenido) return;
    let tag = document.querySelector(`meta[name="${nombre}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', nombre);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', contenido);

    // Open Graph (compartir en redes sociales)
    let og = document.querySelector(`meta[property="og:${nombre}"]`);
    if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', `og:${nombre}`);
        document.head.appendChild(og);
    }
    og.setAttribute('content', contenido);
}

export default function useSeo({ title, description }) {
    useEffect(() => {
        document.documentElement.lang = 'es';

        if (title) document.title = `${title} | ${SITIO}`;
        setMeta('description', description);

        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        if (title) ogTitle.setAttribute('content', `${title} | ${SITIO}`);
    }, [title, description]);
}
