const { pool } = require("../../../services/poolService");

const sendMessages = (message) => {
    const { text, from_id, to_id } = message;

    const values = [text, from_id, to_id];
    const query = `INSERT INTO direct_messages (text, from_userid, to_userid)
    VALUES ($1, $2, $3) RETURNING *`;

    return new Promise((resolve, reject) => {
        try {
            pool.connect((error, client, release) => {
                client.query(query, values, (err, result) => {
                    release();
                    if (result.rowCount > 0) {
                        resolve({
                            message: result.rows,
                        });
                    }
                });
            });
        } catch (error) {
            reject({ error: error.message });
        }
    });
};

module.exports = { sendMessages };
