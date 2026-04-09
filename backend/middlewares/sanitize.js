const xss = require('xss');

/**
 * Sanitiza un string para prevenir ataques XSS.
 * Si el valor es undefined o null, retorna una cadena vacía.
 * @param {*} value - El valor a limpiar.
 * @returns {string}
 */
const sanitize = (value) => (value ? xss(String(value)) : '');

module.exports = { sanitize };
