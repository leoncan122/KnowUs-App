const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { pool } = require("../../../services/poolService");

require("dotenv").config({ path: "../../../../.env" });

const getLastPublications = (req, res) => {
    try {
        const query =
            "SELECT * FROM public_questions pq JOIN answers a ON pq.id = a.question_id WHERE is_answered = true ORDER by a.date DESC LIMIT 15";

        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ message: error.message });
            }
            client.query(query, (err, result) => {
                release();
                if (err) {
                    return res
                        .status(404)
                        .send({ isSuccesful: false, message: err.message });
                }
                return res
                    .status(200)
                    .send({ isSuccesful: true, publications: result.rows });
            });
        });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
module.exports = { getLastPublications };
