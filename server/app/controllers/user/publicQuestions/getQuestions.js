const { pool } = require("../../../services/poolService");

const getQuestions = (req, res) => {
    const { id } = req; // id = userId

    const query =
        "SELECT * FROM users u JOIN public_questions pq ON u.id = pq.from_userid WHERE pq.to_userid = $1 AND is_draft = false ORDER by pq.date DESC";
    try {
        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ message: error.message });
            }
            client.query(query, [id], (err, result) => {
                release();
                if (err) {
                    return res
                        .status(404)
                        .send({ isSuccesful: false, message: err.message });
                }
                return res
                    .status(200)
                    .send({ isSuccesful: true, questions: result.rows });
            });
        });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
module.exports = { getQuestions };
