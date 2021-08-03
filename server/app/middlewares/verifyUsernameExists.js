const { pool } = require("../services/poolService");

const verifyUsernameExists = async (req, res, next) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).send({ message: "You must insert a username" });
    }

    const query = "SELECT * FROM users WHERE user_name = $1";

    try {
        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ message: error.message });
            }

            client.query(query, [username], (err, result) => {
                release();
                if (err) {
                    return res.status(404).send({ message: err.message });
                }

                if (result.rowCount === 1) {
                    return res.status(400).send({
                        message: `${username} username already exists`,
                    });
                }

                next();
            });
        });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = { verifyUsernameExists };
