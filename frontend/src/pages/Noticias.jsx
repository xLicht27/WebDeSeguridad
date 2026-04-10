import { useState, useEffect } from 'react'
import { obtenerNoticias } from '../ghostClient' // <--- NUEVO IMPORT
import { Link } from 'react-router-dom'
import '../css/shared.css'
import '../css/index.css'

function Noticias() {
    const [noticias, setNoticias] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        // Llamada simple a nuestra nueva función de Ghost
        obtenerNoticias().then(posts => {
            setNoticias(posts);
            setCargando(false);
        });
    }, [])

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Noticias</h1>
                    <p>Mantente informado con las últimas novedades de PRESER SEGURIDAD S.A.C.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="news-grid">
                        {cargando && <p style={{ padding: '2rem' }}>Cargando noticias...</p>}
                        {!cargando && noticias.length === 0 && <p style={{ padding: '2rem' }}>No hay noticias publicadas aún.</p>}

                        {noticias.map(noticia => (
                            // Ghost usar 'slug' directo en vez de 'slug.current'
                            <div className="news-card" key={noticia.slug}>
                                {noticia.feature_image && (
                                    <img
                                        src={noticia.feature_image} // Ghost devuelve la imagen lista
                                        alt={noticia.title}         // Ghost usa 'title' en vez de 'titulo'
                                    />
                                )}
                                <div className="news-card-body">
                                    <p className="news-date">
                                        {new Date(noticia.published_at).toLocaleDateString('es-PE', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}
                                    </p>
                                    <h3 style={{ marginBottom: '10px', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{noticia.title}</h3>
                                    <p style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        margin: '0 0 15px 0',
                                        color: '#555',
                                        lineHeight: '1.5',
                                        textAlign: 'justify',
                                        wordBreak: 'break-word',
                                        overflowWrap: 'anywhere'
                                    }}>
                                        {noticia.custom_excerpt || noticia.excerpt || "Haz clic para leer la noticia principal y todos los detalles."}
                                    </p>
                                    <Link to={`/noticias/${noticia.slug}`} className='btn btn-primary'>
                                        Ver noticia
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Noticias
