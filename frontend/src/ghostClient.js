// frontend/src/ghostClient.js

// Usamos las claves de entorno que acabas de configurar
const GHOST_URL = import.meta.env.VITE_GHOST_URL;
const CONTENT_KEY = import.meta.env.VITE_GHOST_CONTENT_API_KEY;

export async function obtenerNoticias() {
    try {
        const res = await fetch(`${GHOST_URL}/ghost/api/content/posts/?key=${CONTENT_KEY}&fields=title,slug,feature_image,published_at,custom_excerpt,excerpt`);
        const data = await res.json();
        return data.posts || [];
    } catch (error) {
        console.error("Error obteniendo noticias de Ghost:", error);
        return [];
    }
}

export async function obtenerNoticiaPorSlug(slug) {
    try {
        // Pedimos TODO el contenido HTML de una sola noticia
        const res = await fetch(`${GHOST_URL}/ghost/api/content/posts/slug/${slug}/?key=${CONTENT_KEY}`);
        const data = await res.json();
        return data.posts?.[0] || null;
    } catch (error) {
        console.error("Error obteniendo la noticia:", error);
        return null;
    }
}
