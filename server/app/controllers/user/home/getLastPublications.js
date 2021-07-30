const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

require("dotenv").config({ path: "../../../../.env" });

const getLastPublications = (req, res) => {
    try {
        const pool = new Pool({
            user: process.env.PG_USER,
            host: process.env.PG_HOST,
            database: process.env.PG_DATABASE,
            password: process.env.PG_PASS,
            port: process.env.PG_PORT,
        });

        const query =
            "SELECT * FROM public_questions pq JOIN answers a ON pq.id = a.question_id WHERE is_answered = true ORDER by DATE DESC";

        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ message: error.message });
            }
            client.query(query, (err, result) => {
                release();
                if (err) {
                    return res.status(404).send({ message: err.message });
                }
                return res.status(200).send({ publications: result.rows });
            });
        });
    } catch {}
};
module.exports = { getLastPublications };
