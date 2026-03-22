import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../sanityClient'
import { PortableText } from '@portabletext/react'
import '../css/shared.css'
import '../css/index.css'

function NoticiaDetalle() {
    const { slug } = useParams()
    const [noticia, setNoticia] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const query = `*[_type == "noticia" && slug.current == $slug][0] {
            titulo,
            autor,
            fecha,
            image,
            resumen,
            contenido
        }`

        client.fetch(query, { slug })
            .then(data => {
                setNoticia(data)
                setCargando(false)
            })
            .catch(err => {
                console.error('Error al cargar la noticia:', err)
                setCargando(false)
            })
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
            <section className="page-hero">
                <div className="container">
                    <h1>{noticia.titulo}</h1>
                    <p>{noticia.resumen}</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    {/* Imagen principal */}
                    {noticia.image && (
                        <img
                            src={urlFor(noticia.image).width(800).url()}
                            alt={noticia.titulo}
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                marginBottom: '2rem',
                                objectFit: 'cover',
                                maxHeight: '450px'
                            }}
                        />
                    )}

                    {/* Meta info */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        marginBottom: '2rem',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid #e0d08a'
                    }}>
                        {noticia.autor && (
                            <span>✦ <strong>Autor:</strong> {noticia.autor}</span>
                        )}
                        {noticia.fecha && (
                            <span>🗓 {new Date(noticia.fecha).toLocaleDateString('es-PE', {
                                year: 'numeric', month: 'long', day: 'numeric'
                            })}</span>
                        )}
                    </div>

                    {/* Contenido del artículo */}
                    <div style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                        {noticia.contenido
                            ? <PortableText value={noticia.contenido} />
                            : <p>Esta noticia no tiene contenido detallado aún.</p>
                        }
                    </div>

                    {/* Botón volver */}
                    <div style={{ marginTop: '3rem' }}>
                        <Link to="/noticias" className="btn btn-primary">
                            ← Volver a Noticias
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}

export default NoticiaDetalle
