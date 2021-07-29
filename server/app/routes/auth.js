const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("pg");
require("dotenv").config({ path: "../../../.env" });

const signup = (req, res) => {
    const { email, password, username } = req.body;
    const values = [username, email, password];

    const query = "INSERT INTO users (user_name,user_mail,user_pass) VALUES (";

    if (!email || !password || !username) {
        return res
            .status(400)
            .send({ message: "Must complete all the fields" });
    }

    pool.connect((err, client, release) => {
        if (err) {
            return res.status(404).send({ err: err.message });
        }
        client.query(query, values, (err, result) => {
            if (err) {
                res.status(404).send({ message: "Error excecuting query" });
            }
        });
    });
};

exports.signup = signup;
