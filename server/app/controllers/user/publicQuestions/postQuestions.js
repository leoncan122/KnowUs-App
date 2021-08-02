const { pool } = require("../../../services/poolService");
const query =
    "insert into public_questions (text,from_userid ,to_userid,category ,is_draft,date, is_answered )values ($1,$2,$3,$4,$5,now(),'no')";

const postQuestions = (req, res) => {
    const { message, from, to, category, draft } = req.body;
    const values = [message, from, to, category, draft];
    if (!message || !from || !to || !category || !draft) {
        return res
            .status(400)
            .send({ message: "Must complete all the fields" });
    }
    console.log(values[4]);
    pool.connect((error, client, release) => {
        if (error) {
            return res.status(404).send({ message: error.message });
        }
        client.query(query, values, (err, result) => {
            release();
            if (err) {
                return res.status(404).send({ message: error.message });
            }
            if (values[4] === "true") {
                return res
                    .status(200)
                    .send({ message: "Mesage saved as draft" });
            } else
                res.status(200).send({
                    message: "message sent correctly",
                });
        });
    });
};

module.exports = { postQuestions };
