const { pool } = require("../../../services/poolService");

const query =
    "update users set profession = $1, country = $2, city = $3, github_account = $4, linkedin_account = $5 where id = $6 returning *";

const editProfile = (req, res) => {
    const userId = req.id;

    const { profession, country, city, github, linkedin } = req.body;
    const values = [profession, country, city, github, linkedin, userId];

    try {
        pool.connect((error, client, release) => {
            if (error) {
                return res.status(404).send({ error: error.message });
            }
            client.query(query, values, (err, result) => {
                release();
                if (err) {
                    return res
                        .status(404)
                        .send({ isSuccesful: false, err: err.message });
                }
                return res
                    .status(200)
                    .send({ isSuccesful: true, message: "Profile Modified" });
            });
        });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = editProfile;
