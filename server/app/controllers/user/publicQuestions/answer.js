const { pool } = require("../../../services/poolService");

const sendQuery =
    "INSERT INTO answers (text,is_draft,question_id)values($1,$2,$3)RETURNING *";

const answeredTrue =
    "UPDATE public_questions SET is_answered = true WHERE id=$1 RETURNING *";

const draftQuery =
    "INSERT INTO answers (text,is_draft,question_id)values($1,$2,$3)";

const answer = (req, res) => {
    const { message, draft, questionId } = req.body;
    const values = [message, draft, questionId];

    if (!message || !questionId) {
        return res.status(400).send({ error: "Must complete all the fields" });
    }
    pool.connect((error, client, release) => {
        if (error) {
            return res.status(404).send({ error: error.message });
        }
        client.query(sendQuery, values, (err, result) => {
            if (err) {
                res.status(404).send({ error: err.message });
            }

            if (result.rowCount > 0 && values[1] === "true") {
                return res
                    .status(200)
                    .send({ message: "Mesage saved as draft" });
            }
            client.query(answeredTrue, [values[2]], (err, result) => {
                release();

                if (err) {
                    res.status(404).send({ error: err.message });
                }
                if (result.rowCount > 0) {
                    res.status(201).send({ message: "Mesage has been sent" });
                }
            });
        });
    });
};

module.exports = { answer };
