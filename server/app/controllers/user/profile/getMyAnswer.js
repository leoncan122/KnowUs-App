const { pool } = require("../../../services/poolService");

const query = `select a.text from answers a
    join public_questions pq on a.question_id = pq.id join users u on pq.to_userid = u.id
    where pq.to_userid = $1`;

const getMyAnswer = async (req, res) => {
    const userId = req.id;
    try {
        const result = await pool.query(query, [userId]);
        return res.json(result.rows);
    } catch (error) {
        return res.send(error);
    }
};

module.exports = getMyAnswer;
