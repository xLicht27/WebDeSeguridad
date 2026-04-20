const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 600, checkperiod: 120 }); // TTL of 10 minutes (600 seconds)

module.exports = myCache;
