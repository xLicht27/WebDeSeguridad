import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getSlides() {
    const { data, error } = await supabase
        .from('hero_slides')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true })
    if (error) throw error
    return data || []
}

export async function getServicios() {
    const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true })
    if (error) throw error
    return data || []
}

export async function getServicioBySlug(slug) {
    const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single()
    if (error) throw error
    return data
}

export async function getClientes() {
    const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true })
    if (error) throw error
    return data || []
}

export async function getEmpresa() {
    const { data, error } = await supabase
        .from('company_info')
        .select('*')
        .limit(1)
        .single()
    if (error) throw error
    return data
}

export async function postContacto(formData) {
    const functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contacto`
    const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
    })
    const result = await response.json()
    if (!response.ok) {
        throw new Error(result.error || 'Error enviando formulario')
    }
    return result
}
