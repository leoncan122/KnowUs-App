const { pool } = require("../../services/poolService");

const getMessages = (id) => {
    const query = `SELECT dm.from_userid sender_id, u.user_name sender, u.photo sender_photo,
    dm.id msg_id, dm.text, dm.date
    FROM direct_messages dm JOIN users u ON u.id = dm.from_userid
    WHERE dm.to_userid = $1
    ORDER by date DESC;`;

    return new Promise((resolve, reject) => {
        try {
            pool.connect((error, client, release) => {
                client.query(query, [id], (err, result) => {
                    release();

                    if (result.rowCount > 0) {
                        resolve(result.rows);
                    }
                });
            });
        } catch (error) {
            reject({ error: error.message });
        }
    });
};

module.exports = { getMessages };
