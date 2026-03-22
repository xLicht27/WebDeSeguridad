export default {
    name: 'noticia',
    title: 'Noticia',
    type: 'document',
    fields: [
        {
            name: 'titulo',
            title: 'Titulo',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'URL (slug)',
            type: 'slug',
            options: { source: 'titulo' },
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Imagen principal',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'fecha',
            title: 'fecha de publicacion',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            name: 'resumen',
            title: 'Resumen',
            type: 'text',
            rows: 3
        },
        {
            name: 'contenido',
            title: 'Contenido',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'autor',
            title: 'Autor',
            type: 'string',
        }
    ]
}