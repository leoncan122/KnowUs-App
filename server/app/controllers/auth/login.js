const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { pool } = require("../../services/poolService");
require("dotenv").config({ path: "../../../../.env" });

const ONEDAY = 86400;

const login = (req, res) => {
    const { email, password } = req.body;
    const values = [email, password];
    console.log(values);
    if (!email || !password) {
        return res
            .status(400)
            .send({ message: "Must complete all the fields" });
    }
    const query = "SELECT * FROM users WHERE user_mail = $1";

    pool.connect((error, client, release) => {
        if (error) {
            return res.status(404).send({ error: error.message });
        }
        client.query(query, [values[0]], (err, result) => {
            release();
            if (err) {
                return res.status(404).send({ error: err.message });
            }
            const user = result.rows[0];
            if (!user) {
                return res.status(400).send({ error: "User not found." });
            }
            const passIsValid = bcrypt.compareSync(
                req.body.password,
                user.user_pass
            );

            if (!passIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    error: "Invalid Password!",
                });
            }
            const token = jwt.sign({ user: user.id }, process.env.SECRET, {
                expiresIn: ONEDAY,
            });

            res.cookie("token", token);
            res.cookie("id", user.id);
            res.status(201).json({
                username: user.user_name,
                accessToken: token,
                isAuthenticated: true,
                message: `Welcome back ${user.user_name}`,
            });
        });
    });
};

module.exports = { login };
