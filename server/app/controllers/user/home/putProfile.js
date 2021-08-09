const { pool } = require("../../../services/poolService");

const putProfile = (req, res) => {
    const { userId, on } = req.body;
    const values = [userId];
    query = `update users set is_profesional = ${req.body.on}  where id =$1 returning is_profesional, id`;

    pool.query(query, values, (error, result) => {
        if (error) {
            return res.status(404).send({ message: error.message });
        } else return res.status(200).json(result.rows);
    });
};

module.exports = { putProfile };
