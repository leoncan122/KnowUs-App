const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

require("dotenv").config({ path: "../../../../.env" });

const signup = async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res
            .status(400)
            .send({ message: "Must complete all the fields" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const values = [username, email, hashedPassword];

    const pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "knowus",
        password: "newPassword",
        port: 5432,
    });

    const query =
        "INSERT INTO users (user_name, user_mail, user_pass) VALUES ($1, $2, $3) RETURNING *";

    pool.connect((error, client, release) => {
        if (error) {
            return res.status(404).send({ message: error.message });
        }
        try {
            client.query(query, values, (err, result) => {
                release();
                if (err) {
                    return res.status(404).send({ message: err.message });
                }
                if (result.rowCount === 1) {
                    const user = result.rows[0];

                    const token = jwt.sign(
                        { user: user.id },
                        process.env.SECRET,
                        {
                            expiresIn: 28800, //8 hours
                        }
                    );
                    res.cookie("token", token, { httpOnly: true });

                    res.status(201).json({
                        username: user.user_name,
                        accessToken: token,
                        isAuthenticated: true,
                        message: `User ${user.user_name} was registered with success`,
                    });
                }
            });
        } catch {
            throw error;
        }
    });
};

module.exports = { signup };
