const { pool } = require("../services/poolService");

const verifyUserOrMailExists = async (req, res, next) => {
    const findUser = {
        username: req.body.username.toLowerCase(),
        email: req.body.email.toLowerCase(),
    };

    const values = [findUser.username, findUser.email];

    if (!findUser.username) {
        return res.status(400).send({ message: "You must insert a username" });
    }
    if (!findUser.email) {
        return res.status(400).send({ message: "You must insert a usermail" });
    }
    const query = "SELECT * FROM users WHERE user_name = $1 or user_mail= $2";
    pool.connect((error, client, release) => {
        if (error) {
            return console.error("Error acquiring client", error.stack);
        }
        client.query(query, values, (err, result) => {
            release();
            if (err) {
                console.log(err.message);
                return res.status(400).json({ err });
            }
            const user = result.rows[0];
            if (!user) {
                next();
            } else if (user.user_name === findUser.username) {
                res.status(400).send({
                    message: "Failed! Username is already in use!",
                });
                return;
            } else if (user.user_mail === findUser.email) {
                res.status(400).send({
                    message: "Failed! Email is already in use!",
                });
                return;
            }
        });
    });
};

module.exports = { verifyUserOrMailExists };
