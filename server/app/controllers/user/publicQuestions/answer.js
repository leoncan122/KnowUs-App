const { pool } = require("../../../services/poolService");

const sendQuery =
    "INSERT INTO answers (text,is_draft,question_id)values($1,$2,$3)RETURNING *";

const answeredTrue =
    "UPDATE public_questions SET is_answered = true WHERE id=$1 RETURNING *";

// const draftQuery =
//     "INSERT INTO answers (text,is_draft,question_id)values($1,$2,$3)";

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
        client.query(sendQuery, values, (err, result) => {
            if (err) {
                res.status(404).send({ error: err.message });
            }

            if (result.rowCount > 0 && values[1] === "true") {
                return res
                    .status(200)
                    .send({ message: "Message saved as draft" });
            }

            client.query(answeredTrue, [questionId], (errors, results) => {
                release();
                if (errors) {
                    res.status(404).send({ error: errors.message });
                }
                if (results.rowCount > 0) {
                    res.status(201).send({
                        message: "Mesage has been sent",
                        response: results.rows[0],
                    });
                }
            });
        });
    });
};

module.exports = { answer };
