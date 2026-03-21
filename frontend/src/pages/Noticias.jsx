import { useState, useEffect } from 'react'
import { client, urlFor } from '../sanityClient'
import '../css/shared.css'
import '../css/index.css'

function Noticias() {
    const [noticias, setNoticias] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const query = `*[_type == "noticia"] | order(fecha desc) {
            titulo,
            slug,
            imagen,
            fecha,
            resumen
        }`

        client.fetch(query)
            .then(data => {
                setNoticias(data)
                setCargando(false)
            })
            .catch(err => {
                console.error('Error al cargar noticias:', err)
                setCargando(false)
            })
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
                            <div className="news-card" key={noticia.slug.current}>
                                {noticia.imagen && (
                                    <img
                                        src={urlFor(noticia.imagen).width(400).url()}
                                        alt={noticia.titulo}
                                    />
                                )}
                                <div className="news-card-body">
                                    <p className="news-date">
                                        {new Date(noticia.fecha).toLocaleDateString('es-PE', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}
                                    </p>
                                    <h3>{noticia.titulo}</h3>
                                    <p>{noticia.resumen}</p>
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
