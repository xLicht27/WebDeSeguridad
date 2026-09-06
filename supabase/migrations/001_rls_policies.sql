-- ============================================
-- PRESER WEB - Row Level Security (RLS) Policies
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- Fecha: 2026-09-06
-- ============================================

-- ============================================
-- 1. TABLA: hero_slides (Carrusel principal)
-- ============================================
ALTER TABLE hero_slides ENABLE ROW LEVEL SECURITY;

-- Lectura pública solo de slides activos
CREATE POLICY "hero_slides_select_public" ON hero_slides
    FOR SELECT USING (is_active = true);

-- ============================================
-- 2. TABLA: services (Servicios)
-- ============================================
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Lectura pública solo de servicios activos
CREATE POLICY "services_select_public" ON services
    FOR SELECT USING (is_active = true);

-- ============================================
-- 3. TABLA: clients (Logos de clientes)
-- ============================================
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Lectura pública solo de clientes activos
CREATE POLICY "clients_select_public" ON clients
    FOR SELECT USING (is_active = true);

-- ============================================
-- 4. TABLA: company_info (Info de empresa)
-- ============================================
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;

-- Lectura pública de información de empresa
CREATE POLICY "company_info_select_public" ON company_info
    FOR SELECT USING (true);

-- ============================================
-- 5. TABLA: messages (Formulario de contacto)
-- ============================================
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Solo permitir INSERT anónimo (formulario contacto)
-- No permitir SELECT público (privacidad de mensajes)
CREATE POLICY "messages_insert_anonymous" ON messages
    FOR INSERT WITH CHECK (true);

-- SELECT solo para service role (admin) - no policy = denegado por defecto
-- Las Edge Functions usan service_role key que bypasea RLS

-- ============================================
-- NOTAS:
-- - Las Edge Functions usan SUPABASE_SERVICE_ROLE_KEY
--   que bypasea RLS automáticamente
-- - El frontend usa la ANON_KEY que respeta estas policies
-- - Para administrar mensajes, usar el Dashboard o una
--   Edge Function con service_role
-- ============================================
