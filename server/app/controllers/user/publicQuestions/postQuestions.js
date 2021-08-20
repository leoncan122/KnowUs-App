const { pool } = require("../../../services/poolService");

const sendQuery =
    "insert into public_questions (text,from_userid ,to_userid,category ,is_draft, is_answered )values ($1,$2,$3,$4,$5,false) RETURNING *";

const postQuestions = (req, res) => {
    const { text, to, category, draft } = req.body;
    const from = req.id; // gettin id from the token

    const values = [text, from, to, category, draft];
    if (!from) {
        return res.status(400).send({ error: "You must be loged" });
    }

    if (!text || !to || !category) {
        return res
            .status(400)
            .send({ error: "Must complete all the fields indicated" });
    }
    pool.connect((error, client, release) => {
        if (error) return res.status(404).send({ error: error.message });
        client.query(sendQuery, values, (err, result) => {
            release();
            if (err) {
                return res.status(404).send({ error: err.message });
            }

            if (result.rows[0].is_draft === true) {
                console.log("hola");
                res.status(200).send({
                    message: "Mesage saved as draft",
                });
            } else
                return res
                    .status(200)
                    .send({ message: "Message sent correctly" });
        });
    });
};

module.exports = { postQuestions };
