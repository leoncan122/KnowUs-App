const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { pool } = require("../../../services/poolService");

require("dotenv").config({ path: "../../../../.env" });

const getLastPublications = (req, res) => {
    const query = `SELECT u.id, u.user_name, pq.text, pq.category, pq.is_answered, p.id, p.user_name, a.text, a.hour
                    FROM public_questions pq JOIN answers a ON pq.id = a.question_id
                    JOIN users u ON pq.from_userid = u.id
                    JOIN users p ON pq.to_userid = p.id
                    WHERE is_answered = true ORDER by a.hour DESC LIMIT 15 `;
    try {
        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ message: error.message });
            }
            client.query(query, (err, result) => {
                release();
                if (err) {
                    return res
                        .status(404)
                        .send({ isSuccesful: false, message: err.message });
                }
                return res
                    .status(200)
                    .send({ isSuccesful: true, publications: result.rows });
            });
        });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
module.exports = { getLastPublications };
