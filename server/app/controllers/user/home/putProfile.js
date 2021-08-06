const { pool } = require("../../../services/poolService");

const putProfile = (req, res) => {
    const { userId, on } = req.body;
    const values = [userId];
    query = `update users set is_profesional = ${req.body.on}  where id =$1`;

    pool.query(query, values, (error, result) => {
        if (error) {
            return res.status(404).send({ message: error.message });
        }
        if (req.body.on === "true") {
            return res.status(201).send({
                Message: "User activated as a professional user",
            });
        } else
            return res.status(201).send({
                Message: "User deactivated as a professional user",
            });
    });
};

module.exports = { putProfile };
