const { pool } = require("../../../services/poolService");

const getQuestions = (req, res) => {
    const { id } = req; // id = userId
    const query =
        "SELECT pq.id questionId, pq.date, pq.title, pq.text, pq.is_answered, u.id senderId, u.user_name sender, u.photo FROM users u JOIN public_questions pq ON u.id = pq.from_userid WHERE pq.to_userid = $1 AND  pq.is_answered <> true ORDER by pq.date DESC";
    try {
        pool.connect((error, client, release) => {
            client.query(query, [id], (err, result) => {
                release();
                if (result.rowCount > 0) {
                    return res
                        .status(200)
                        .send({ isSuccesful: true, questions: result.rows });
                }
            });
        });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
module.exports = { getQuestions };
