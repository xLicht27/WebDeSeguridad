const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false }
});

async function testConnection() {
    try {
        console.log('--- Probando conexión con SUPABASE ---');
        const start = Date.now();
        const res = await pool.query('SELECT NOW()');
        const end = Date.now();
        console.log('✅ Conexión exitosa a:', process.env.DB_HOST);
        console.log('⏱️ Tiempo de respuesta:', end - start, 'ms');

        const tables = await pool.query(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        `);
        console.log('\n📊 Tablas encontradas en Supabase:');
        tables.rows.forEach(row => console.log(` - ${row.table_name}`));

        const servicesCount = await pool.query('SELECT COUNT(*) FROM services');
        console.log(`\n📦 Total de servicios migrados: ${servicesCount.rows[0].count}`);

        await pool.end();
    } catch (err) {
        console.error('❌ Error conectando a Supabase:', err.message);
    }
}

testConnection();
