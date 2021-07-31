const cookie = require("cookie");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });

const verifyToken = async (req, res, next) => {
    let cookies = cookie.parse(req.headers.cookie || "");

    let token = cookies.token;

    if (!token) {
        return res.status(404).send({ message: "Token not found" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET); //synchronous

        req.id = decoded.user;

        next();
    } catch (err) {
        return res.status(500).send(err.message);
    }
};
module.exports = { verifyToken };
