const { pool } = require("../../../services/poolService");

const query1 = `delete from answers where id in (select a.id from answers a
    join public_questions pq on question_id = pq.id
    join users u on pq.from_userid = u.id
    where u.id = $1)`;

const query2 = `delete from answers where id in (select a.id from answers a
        join public_questions pq on question_id = pq.id
        join users u on pq.to_userid = u.id
        where u.id = $1)`;

const query3 = `delete from public_questions where id in (select pq.id from public_questions pq
    join users u on pq.from_userid = u.id
    where u.id = $1)`;

const query4 = `delete from public_questions where id in (select pq.id from public_questions pq
    join users u on pq.to_userid = u.id
    where u.id = $1)`;

const query5 = `delete from direct_messages  where id in (select dm.id from direct_messages dm
    join users u on dm.to_userid = u.id
    where u.id = $1)`;

const query6 = `delete from direct_messages  where id in (select dm.id from direct_messages dm
    join users u on dm.from_userid = u.id
    where u.id = $1)`;

const query7 = `delete from users WHERE id = $1`;

const queries = [query1, query2, query3, query4, query5, query6, query7];

const deleteProfile = (req, res) => {
    const userId = req.id;

    try {
        queries.forEach((query) => {
            pool.query(query, [userId]);
        });
        return res.send("User Deleted");
    } catch (error) {
        return res.stats(404).send({ error: error.message });
    }
};

module.exports = deleteProfile;
