const { pool } = require("../../../services/poolService");
const query =
    "insert into answers (text,is_draft,question_id)values($1,$2,$3)returning*";
const query2 = "update public_questions set  is_answered = 'yes' where id=$1";

const answer = (req, res) => {
    const { message, draft, questionId } = req.body;
    const values = [message, draft, questionId];
    if (!message || !draft || !questionId) {
        return res
            .status(400)
            .send({ message: "Must complete all the fields" });
    }
    pool.connect((error, client, release) => {
        if (error) {
            return res.status(404).send({ message: error.message });
        }
        client.query(query, values, (err, result) => {
            if (err) {
                return res.status(404).send({ message: err.message });
            }
            if (values[1] === "false") {
                client.query(query2, [values[2]], (err, result) => {
                    release();
                    return res
                        .status(200)
                        .send({ message: "Message sent correctly" });
                });
            }
            if (values[1] === "true") {
                release();
                return res
                    .status(200)
                    .send({ message: "Mesage saved as draft" });
            }
        });
    });
};

module.exports = { answer };
