const { pool } = require("../../../services/poolService");

const query = `SELECT u.id sender_id, u.user_name sender_username,u.photo sender_photo,pq.title,
pq.text question_text ,pq.category,pq.is_answered, pq.date question_date,
p.id prof_id, p.user_name prof_username,p.photo prof_photo,
a.id answer_id, a.text answer_text, a.date answer_date
FROM public_questions pq JOIN answers a ON pq.id = a.question_id
JOIN users u ON pq.from_userid = u.id
JOIN users p ON pq.to_userid = p.id
WHERE pq.to_userid = $1`;

<<<<<<< HEAD

=======
>>>>>>> dev-leon
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
