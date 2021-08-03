const { pool } = require("../../../services/poolService");
require("dotenv").config({ path: "../../../../.env" });

const searchPublications = (req, res) => {
    const { word } = req.query;
    const query = `SELECT u.id sender_id, u.user_name sender_username, pq.text question_text ,pq.category,pq.is_answered,
    p.id prof_id, p.user_name prof_username, a.text answer_text, a.hour
    FROM public_questions pq JOIN answers a ON pq.id = a.question_id
    JOIN users u ON pq.from_userid = u.id
    JOIN users p ON pq.to_userid = p.id
    WHERE a.text ILIKE '%'||$1||'%' AND is_answered = true
    OR pq.category ILIKE '%'||$1||'%' AND is_answered = true
    ORDER BY a.id DESC`;

    if (!word) {
        return res
            .status(404)
            .send({ message: "Cant read an empty book, insert words" });
    }
    try {
        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ message: error.message });
            }
            client.query(query, [word], (err, result) => {
                release();
                if (err) {
                    return res.status(404).send({ message: err.message });
                }
                if (result.rowCount === 0) {
                    return res.status(404).send({
                        isSuccesful: false,
                        message: "Can't find anything, try again ;)",
                    });
                }
                return res
                    .status(200)
                    .send({ isSuccesful: true, publications: result.rows });
            });
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { searchPublications };
