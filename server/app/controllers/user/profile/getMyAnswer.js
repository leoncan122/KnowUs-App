const { pool } = require("../../../services/poolService");

const query = `SELECT u.id sender_id, u.user_name sender_username, pq.text question_text ,pq.category,pq.is_answered,
p.id prof_id, p.user_name prof_username, a.id answer_id, a.text answer_text, a.date
FROM public_questions pq JOIN answers a ON pq.id = a.question_id
JOIN users u ON pq.from_userid = u.id
JOIN users p ON pq.to_userid = p.id
WHERE pq.to_userid = $1`;

console.log("entre el endpoint");
const getMyAnswer = async (req, res) => {
    const { userId } = req.params;
    
    try {
        const result = await pool.query(query, [userId]);
        return res.json(result.rows);
    } catch (error) {
        return res.send({ message: "Error connecting database" });
    }
};

module.exports = getMyAnswer;
