const { pool } = require("../../../services/poolService");
const sendQuery =
    "insert into answers (text,is_draft,question_id)values($1,$2,$3)returning*";
const draftQuery =
    "update public_questions set  is_answered = 'yes' where id=$1";

const answer = (req, res) => {
    const { text, draft, questionId } = req.body;
    const values = [text, draft, questionId];
    console.log(values);
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
            client.query(draftQuery, values, (err, result) => {
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
