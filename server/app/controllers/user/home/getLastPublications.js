const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { pool } = require("../../../services/poolService");

require("dotenv").config({ path: "../../../../.env.development.heroku" });

const getLastPublications = (req, res) => {
    const query = `SELECT u.id sender_id, u.user_name sender_username, pq.text question_text ,pq.category,pq.is_answered,
    p.id prof_id, p.user_name prof_username, a.id answer_id, a.text answer_text, a.date
    FROM public_questions pq JOIN answers a ON pq.id = a.question_id
    JOIN users u ON pq.from_userid = u.id
    JOIN users p ON pq.to_userid = p.id
    WHERE is_answered = true ORDER by a.date DESC LIMIT 15;`;

    try {
        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ error: error.message });
            }
            client.query(query, (err, result) => {
                release();
                if (err) {
                    return res
                        .status(404)
                        .send({
                            isSuccesful: false,
                            error: "Failed connection to server",
                        });
                }
                return res
                    .status(200)
                    .send({ isSuccesful: true, publications: result.rows });
            });
        });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
module.exports = { getLastPublications };
