@echo off
echo ============================================
echo   PRESER WEB - SETUP POST-MIGRACION
echo ============================================
echo.
echo PASOS COMPLETADOS AUTOMATICAMENTE:
echo   [OK] RLS habilitado en 5 tablas
echo   [OK] Politicas RLS creadas
echo   [OK] Edge Function de contacto creada
echo   [OK] Frontend migrado a Supabase directo
echo   [OK] Build verificado
echo.
echo ============================================
echo   PASOS MANUALES RESTANTES:
echo ============================================
echo.
echo 1. Obtener ANON KEY de Supabase:
echo    - Ve a: https://supabase.com/dashboard
echo    - Selecciona tu proyecto
echo    - Settings ^> API ^> project api keys ^> anon ^> public
echo    - Copia la clave completa (empieza con eyJ...)
echo.
echo 2. Actualizar frontend/.env:
echo    - Abre frontend/.env
echo    - Reemplaza "TU_SUPABASE_ANON_KEY_AQUI" con tu anon key real
echo.
echo 3. Configurar Secrets de Edge Function:
echo    - Ve a: https://supabase.com/dashboard ^> Edge Functions ^> Secrets
echo    - Agrega: RESEND_API_KEY = TU_RESEND_API_KEY (valor real desde Resend Dashboard)
echo    - Agrega: EMAIL_DESTINO = gerencia@preserseguridad.com
echo.
echo 4. Desplegar Edge Function:
echo    - Ejecuta: npx supabase login
echo    - Ejecuta: npx supabase functions deploy contacto
echo.
echo 5. Vercel (opcional):
echo    - Si tienes VITE_API_URL como variable de entorno, eliminala
echo.
echo 6. Render (opcional):
echo    - Pausa o elimina el servicio en render.com
echo.
echo ============================================
echo   Backup disponible en:
echo   preserWEB_backup_20260906_121234/
echo ============================================
pause
