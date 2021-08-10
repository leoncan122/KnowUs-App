const { pool } = require("../../../services/poolService");

const query =
    "select id ,user_name ,user_mail , country ,city ,profession , is_profesional , photo from users where id=$1";

const getUserProfile = (req, res) => {
    const userId = parseInt(req.params.userId);
    const values = [userId];

    pool.connect((error, client, release) => {
        if (error) {
            return res.status(404).send({ message: error.message });
        }

        client.query(query, values, (err, result) => {
            release();
            if (err) {
                return res.status(404).send({ message: err.message });
            }
            if (result.rowCount > 0) {
                res.status(200).json(result.rows);
            }
        });
    });
};

module.exports = { getUserProfile };
