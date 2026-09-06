import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    if (req.method !== 'POST') {
        return new Response(
            JSON.stringify({ error: 'Method not allowed' }),
            { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }

    try {
        const body = await req.json()
        const { full_name, email, phone, company, ruc, position, service_interested, message } = body

        // Sanitización básica (prevenir XSS)
        const sanitize = (val) => val ? String(val).replace(/<[^>]*>/g, '').trim() : ''
        const clean = {
            full_name: sanitize(full_name),
            email: sanitize(email),
            phone: sanitize(phone),
            company: sanitize(company),
            ruc: sanitize(ruc),
            position: sanitize(position),
            service_interested: sanitize(service_interested),
            message: sanitize(message),
        }

        // Validaciones
        if (!clean.full_name || !clean.email || !clean.message) {
            return new Response(
                JSON.stringify({ error: 'Nombre, email y mensaje son obligatorios.' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(clean.email)) {
            return new Response(
                JSON.stringify({ error: 'El correo electrónico proporcionado no es válido.' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (clean.ruc) {
            const rucRegex = /^(10|15|17|20)\d{9}$/
            if (!rucRegex.test(clean.ruc)) {
                return new Response(
                    JSON.stringify({ error: 'El RUC no tiene un formato válido.' }),
                    { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                )
            }
        }

        if (clean.phone) {
            const phoneRegex = /^[0-9]{7,9}$/
            if (!phoneRegex.test(clean.phone)) {
                return new Response(
                    JSON.stringify({ error: 'El teléfono debe contener solo entre 7 y 9 números.' }),
                    { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                )
            }
        }

        // Conectar a Supabase con service role (bypass RLS para INSERT)
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        )

        // Insertar mensaje en la base de datos
        const { data, error: dbError } = await supabase
            .from('messages')
            .insert([{
                full_name: clean.full_name,
                email: clean.email,
                phone: clean.phone,
                company: clean.company,
                ruc: clean.ruc,
                position: clean.position,
                service_interested: clean.service_interested,
                message: clean.message,
            }])
            .select('id')
            .single()

        if (dbError) {
            console.error('Error insertando en BD:', dbError)
            return new Response(
                JSON.stringify({ error: 'Error guardando el mensaje.' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Enviar notificación por email via Resend API
        const resendApiKey = Deno.env.get('RESEND_API_KEY')
        const emailDestino = Deno.env.get('EMAIL_DESTINO')

        if (resendApiKey && emailDestino) {
            try {
                await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${resendApiKey}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        from: 'operaciones@preserseguridad.com',
                        to: emailDestino,
                        subject: `NUEVA SOLICITUD WEB: ${clean.company || clean.full_name}`,
                        text: `Tienes un nuevo formulario de contacto de la página web de PRESER:

  - Datos de la Empresa:
  Empresa: ${clean.company || 'No especificado'}
  RUC: ${clean.ruc || 'No especificado'}

  - Datos del Contacto:
  Nombre: ${clean.full_name}
  Cargo: ${clean.position || 'No especificado'}
  Teléfono: ${clean.phone || 'No especificado'}
  Email: ${clean.email}

  - Detalles del requerimiento:
  Servicio solicitado: ${clean.service_interested || 'No especificado'}
  Mensaje:
  ${clean.message}
                        `,
                    }),
                })
            } catch (emailErr) {
                console.error('Error enviando email:', emailErr)
                // No falla la request por error de email
            }
        }

        return new Response(
            JSON.stringify({ ok: true, id: data.id }),
            { status: 201, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

    } catch (err) {
        console.error('Error general:', err)
        return new Response(
            JSON.stringify({ error: 'Error interno del servidor.' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }
})
