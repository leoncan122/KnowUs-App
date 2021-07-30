const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

require("dotenv").config({ path: "../../../../.env" });

const getRandomRequests = (req, res) => {
    const userId = req.id;

    if (!userId) {
        return res
            .status(500)
            .send({ message: "Invalid credential", isAuthorized: false });
    }
    try {
        const pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "knowus",
            password: "newPassword",
            port: 5432,
        });

        const query =
            "SELECT * FROM public_questions pq JOIN answers a ON pq.id = a.question_id WHERE is_answered = true ORDER by DATE DESC";

        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ message: error.message });
            }
            client.query(query, [userId], (err, result) => {
                release();
                if (err) {
                    return res.status(404).send({ message: err.message });
                }
                return res.status(200).send({ publications: result.rows });
            });
        });
    } catch {}
};
module.exports = { getRandomRequests };
