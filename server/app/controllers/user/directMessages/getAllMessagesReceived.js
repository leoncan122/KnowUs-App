const { pool } = require("../../../services/poolService");

// eslint-disable-next-line consistent-return
const MessagesReceived = async (req, res) => {
    const userId = req.id;
    const query = `SELECT dm.from_userid sender_id, u.user_name sender, u.photo sender_photo
    FROM direct_messages dm JOIN users u ON u.id = dm.from_userid
    WHERE dm.to_userid = $1
    GROUP BY dm.from_userid, u.user_name, u.photo`;

    // const query = `SELECT dm.from_userid sender_id, u.user_name sender, u.photo sender_photo,
    // dm.id msg_id, dm.text, dm.date
    // FROM direct_messages dm JOIN users u ON u.id = dm.from_userid
    // WHERE dm.to_userid = $1
    // ORDER by date DESC`;
    try {
        pool.connect((error, client, release) => {
            // eslint-disable-next-line consistent-return
            client.query(query, [userId], (err, result) => {
                release();
                if (result.rowCount > 0) {
                    return res.status(200).send({ messages: result.rows });
                }
            });
        });
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
};
module.exports = { MessagesReceived };
