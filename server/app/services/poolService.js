const { Pool } = require("pg");

exports.pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    password: process.env.PG_PASS,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    // ssl: process.env.DATABASE_URL ? true : false,
});
