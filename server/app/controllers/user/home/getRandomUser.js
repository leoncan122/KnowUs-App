const { pool } = require("../../../services/poolService");

const query = "select * from users order by random() limit 4;";

const getRandomUser = (req, res) => {
    pool.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ error: error.message });
        }
        res.status(201).json(result.rows);
    });
};

module.exports = { getRandomUser };
