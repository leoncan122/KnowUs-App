const { pool } = require("../../../services/poolService");

const query =
    "update users set profession = $1, country = $2, city = $3 where id = $4 returning *";

const editProfile = async (req, res) => {
    const userId = req.id;
    console.log(req);
    const { profession, country, city } = req.body;
    const values = [profession, country, city, userId];

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
    } catch (error) {}
};

module.exports = editProfile;
