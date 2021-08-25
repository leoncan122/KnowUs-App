const { pool } = require("../../services/poolService");

const getMessages = (to, from) => {
    const query = `SELECT * FROM direct_messages
    WHERE (from_userid = $1 AND  to_userid = $2 OR from_userid = $2 AND  to_userid = $1)
    ORDER by date DESC;`;

    const values = [from, to];

    return new Promise((resolve, reject) => {
        try {
            pool.connect((error, client, release) => {
                client.query(query, values, (err, result) => {
                    release();
                    if (result.rowCount > 0) {
                        resolve(result.rows);
                    }
                });
            });
        } catch (error) {
            reject(error.message);
        }
    });
};

module.exports = { getMessages };
