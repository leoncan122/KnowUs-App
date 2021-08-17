const { pool } = require("../../../services/poolService");

const putProfile = (req, res) => {
    const { userId, on } = req.body;
    const values = [userId, on];
    const query = `update users set is_profesional = $2  where id =$1 returning is_profesional, id`;

    pool.query(query, values, (error, result) => {
        if (error) {
            return res.status(404).send({ message: error.message });
        }
        return res.status(200).json(result.rows);
    });
};

module.exports = { putProfile };
