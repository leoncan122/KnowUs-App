const { pool } = require("../../../services/poolService");
const sendQuery =
    "INSERT INTO answers (text,is_draft,question_id)values($1,$2,$3)RETURNING *";
const draftQuery =
    "UPDATE public_questions SET  is_answered = true WHERE id=$1 RETURNING *";

const answer = (req, res) => {
    const { text, draft, questionId } = req.body;
    const values = [text, draft, questionId];

    if (!text || !questionId) {
        return res.status(400).send({ error: "Must complete all the fields" });
    }

    pool.connect((error, client, release) => {
        if (error) {
            return res.status(404).send({ error: error.message });
        }
        if (values[1] === false) {
            client.query(sendQuery, values, (err, result) => {
                release();
                if (err) {
                    return res.status(404).send({ error: err.message });
                }
                if (result.rowCount > 0) {
                }
                res.status(200).send({
                    message: "message sent correctly",
                });
            });
        }
        if (values[1] === true) {
            client.query(draftQuery, [values[2]], (err, result) => {
                release();
                if (err) {
                    return res.status(404).send({ error: err.message });
                }
                if (result.rowCount > 0) {
                    return res
                        .status(200)
                        .send({ message: "Mesage saved as draft" });
                }
            });
        }
    });
};

module.exports = { answer };
