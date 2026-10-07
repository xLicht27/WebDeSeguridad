import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo';
import '../css/shared.css';

/** Página 404 */
function NoEncontrado() {
    useSeo({ title: 'Página no encontrada', description: 'La página que busca no existe.' });

    return (
        <section className="page-hero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--gold-400)', fontSize: '1rem', letterSpacing: '2px', marginBottom: '8px' }}>ERROR 404</p>
                <h1>Página no encontrada</h1>
                <p>La dirección que buscó no existe o fue movida.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>Volver al inicio</Link>
            </div>
        </section>
    );
}
export default NoEncontrado;
