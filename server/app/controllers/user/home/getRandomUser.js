const { pool } = require("../../../services/poolService");

const query = "select * from users order by random() limit 5;";

const getRandomUser = (req, res) => {
    pool.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: error.message });
        }
        res.status(201).json(result.rows);
    });
};

module.exports = { getRandomUser };
