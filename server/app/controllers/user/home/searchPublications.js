const { pool } = require("../../../services/poolService");
require("dotenv").config({ path: "../../../../.env" });

const searchPublications = (req, res) => {
    const { word } = req.query;
    const queryPublications = `SELECT u.id sender_id, u.user_name sender_username,pq.title, pq.text question_text ,pq.category,pq.is_answered,
    p.id prof_id, p.user_name prof_username,p.is_profesional, a.text answer_text, a.date
    FROM public_questions pq
    JOIN answers a ON pq.id = a.question_id
    JOIN users u ON pq.from_userid = u.id
    JOIN users p ON pq.to_userid = p.id
    WHERE a.text ILIKE '%'||$1||'%' AND is_answered = true
    OR pq.category ILIKE '%'||$1||'%' AND is_answered = true
    OR p.user_name ILIKE '%'||$1||'%' AND p.is_profesional = true
    ORDER BY a.id DESC LIMIT 15`;
    const queryUsers = `SELECT id, user_name, photo, is_profesional
    FROM users
    WHERE user_name ILIKE '%'||$1||'%' AND is_profesional = true
    LIMIT 4`;

    if (!word) {
        return res
            .status(404)
            .send({ error: "Cant read an empty book, insert words" });
    }
    try {
        pool.connect((error, client, release) => {
            const object = {};

            client.query(queryPublications, [word], (err, result) => {
                object.publications = result.rows;

                client.query(queryUsers, [word], (errors, results) => {
                    release();

                    object.users = results.rows;

                    return res.status(200).send(object);
                });
            });
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = { searchPublications };
