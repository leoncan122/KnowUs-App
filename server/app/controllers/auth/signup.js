const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { pool } = require("../../services/poolService");
const { random } = require("../../middlewares/ramdomphoto");

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

    const query = `INSERT INTO users (user_name, user_mail, user_pass,is_profesional , photo) VALUES (lower($1), lower($2), ($3), 'false','${random()}') RETURNING *`;

    pool.connect((error, client, release) => {
        if (error) {
            return res.status(404).send({ error: error.message });
        }
        try {
            client.query(query, values, (err, result) => {
                release();
                if (err) {
                    return res.status(404).send({ error: err.message });
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
        } catch (error) {
            throw error;
        }
    });
};

module.exports = { signup };
