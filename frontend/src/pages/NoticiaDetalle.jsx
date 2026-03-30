import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { obtenerNoticiaPorSlug } from '../ghostClient' // <--- NUEVO IMPORT
import '../css/shared.css'
import '../css/index.css'

function NoticiaDetalle() {
    const { slug } = useParams()
    const [noticia, setNoticia] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        obtenerNoticiaPorSlug(slug).then(post => {
            setNoticia(post);
            setCargando(false);
        });
    }, [slug])

    if (cargando) return (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
            <p>Cargando noticia...</p>
        </div>
    )

    if (!noticia) return (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
            <p>Noticia no encontrada.</p>
            <Link to="/noticias" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Volver a Noticias
            </Link>
        </div>
    )

    return (
        <>
            {/* Opcional: una franja oscura arriba si el diseño lo requiere para el menú */}
            <div style={{ backgroundColor: '#111', height: '100px', width: '100%' }}></div>

            <section className="section" style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    {/* 1. Imagen principal arriba */}
                    {noticia.feature_image && (
                        <div style={{ marginBottom: '2rem' }}>
                            <img
                                src={noticia.feature_image}
                                alt={noticia.title}
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                    maxHeight: '450px'
                                }}
                            />
                        </div>
                    )}

                    {/* 2. Título principal abajo de la imagen */}
                    <h1 style={{ color: '#000', fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
                        {noticia.title}
                    </h1>

                    {/* 3. Extracto (si existe) */}
                    {noticia.custom_excerpt && (
                        <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                            {noticia.custom_excerpt}
                        </p>
                    )}

                    {/* 4. Fecha */}
                    {noticia.published_at && (
                        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #ddd' }}>
                            <span style={{ color: '#666', fontSize: '0.9rem' }}>
                                🗓 Publicado el {new Date(noticia.published_at).toLocaleDateString('es-PE', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                })}
                            </span>
                        </div>
                    )}

                    {/* 5. Contenido / Descripción de la noticia (Arreglado el color blanco) */}
                    <div
                        style={{ lineHeight: '1.8', fontSize: '1.15rem', color: '#222' }}
                        dangerouslySetInnerHTML={{ __html: noticia.html }}
                    />

                    <div style={{ marginTop: '4rem' }}>
                        <Link to="/noticias" className="btn btn-primary" style={{ backgroundColor: '#cbb23b', color: '#000', border: 'none', padding: '10px 20px', fontWeight: 'bold' }}>
                            ← Volver a Noticias
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}

export default NoticiaDetalle
