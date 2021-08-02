const { pool } = require("../../../services/poolService");
require("dotenv").config({ path: "../../../../.env" });

const searchPublications = (req, res) => {
    const { word } = req.query;

    if (!word) {
        return res
            .status(404)
            .send({ message: "Cant read an empty book, insert words" });
    }
    try {
        const query = `SELECT * FROM public_questions pq JOIN answers a ON pq.id = a.question_id WHERE a.text
    ILIKE '%'||$1||'%' AND is_answered = true OR pq.category ILIKE '%'||$1||'%' AND is_answered = true
    ORDER BY a.id DESC`;
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
