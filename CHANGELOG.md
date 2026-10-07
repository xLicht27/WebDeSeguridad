# CHANGELOG - PRESER WEB

Registro de cambios significativos en la arquitectura y rendimiento del proyecto.

---

## [2.0.0] - 2026-09-06

### MIGRACION CRITICA: Eliminacion de Render como intermediario

**Problema detectado:**
- Render (Express.js) actuaba como proxy innecesario entre Vercel y Supabase
- Cold starts de Render: ~22 segundos (medido con curl)
- Cadena de latencia: Usuario → Vercel → Render → Supabase (3 hops)
- Factor de degradacion en cold start: ~110x mas lento

**Solucion implementada:**
- Migracion completa a Supabase directo desde el frontend
- Cadena de latencia reducida: Usuario → Vercel → Supabase (1 hop)
- Eliminacion de dependencia de Render para queries de lectura
- Edge Function para formulario de contacto (escritura)

### Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `frontend/src/supabaseClient.js` | **NUEVO** - Cliente Supabase con todas las queries |
| `frontend/src/pages/Home.jsx` | Migrado de axios+Render a supabaseClient |
| `frontend/src/pages/Contacto.jsx` | Migrado de axios+Render a supabaseClient |
| `frontend/src/pages/Nosotros.jsx` | Eliminados imports no usados (axios, useState, useEffect) |
| `frontend/vercel.json` | Eliminado rewrite `/api/*` a Render |
| `frontend/.env` | Agregadas variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` |
| `frontend/package.json` | Eliminada dependencia `axios`, agregada `@supabase/supabase-js` |

### Archivos nuevos

| Archivo | Proposito |
|---------|-----------|
| `supabase/functions/contacto/index.ts` | Edge Function para formulario de contacto |
| `supabase/migrations/001_rls_policies.sql` | Politicas Row Level Security para tablas |

### Configuracion - PASOS AUTOMATIZADOS (completados)

1. ✅ **RLS habilitado** en las 5 tablas (hero_slides, services, clients, company_info, messages)
2. ✅ **Politicas RLS creadas** via SQL directo a Supabase PostgreSQL
3. ✅ **Edge Function creada** en `supabase/functions/contacto/index.ts`
4. ✅ **Build del frontend** pasa correctamente

### Configuracion - PASOS MANUALES RESTANTES

1. **Supabase Dashboard → Settings → API:** Copiar la `anon` key
2. **Actualizar `frontend/.env`:** Reemplazar `TU_SUPABASE_ANON_KEY_AQUI` con la real
3. **Supabase Dashboard → Edge Functions → Secrets:** Configurar:
   - `RESEND_API_KEY`: `TU_RESEND_API_KEY` (nunca commitear el valor real)
   - `EMAIL_DESTINO`: gerencia@preserseguridad.com
4. **Desplegar Edge Function:** `npx supabase functions deploy contacto` (requiere login)
5. **Vercel:** Eliminar variable `VITE_API_URL` si existe
6. **Render:** Pausar o eliminar el servicio

### Metricas de rendimiento (medidas)

| Metrica | ANTES (con Render) | DESPUES (Supabase directo) |
|---------|-------------------|---------------------------|
| Cold start | ~22,000ms | N/A (sin cold start) |
| Warm request | ~200ms | ~100-200ms (estimado) |
| Hops de red | 3 | 1 |
| Dependencia externa | Render + Supabase | Solo Supabase |
| Costo mensual estimado | Render free + Supabase | Solo Supabase |

### Backup

- Ubicacion: `preserWEB_backup_20260906_121234/`
- Contenido: Backend completo + Frontend (sin node_modules/dist)
- Para restaurar: Copiar contenido del backup sobre el directorio actual

---

## [1.0.0] - Version inicial

### Arquitectura original

- **Frontend:** React + Vite en Vercel
- **Backend:** Express.js en Render (`webdeseguridad.onrender.com`)
- **Base de datos:** Supabase PostgreSQL (usado via Render)
- **CMS:** Ghost (proxy via Vercel)
- **Email:** Resend API (via Render)

### Endpoints del backend (ELIMINADOS en v2.0.0)

- `GET /api/carrusel` → `hero_slides` table
- `GET /api/servicios` → `services` table
- `GET /api/clientes` → `clients` table
- `GET /api/empresa` → `company_info` table
- `POST /api/contacto` → `messages` table + Resend email
- `GET /api/health` → Health check

### Cache (eliminado en v2.0.0)

- `node-cache` con TTL de 10 minutos
- Cache en memoria de Render (se perdia en cold starts)
- Reemplazado por: Supabase query cache + browser cache
