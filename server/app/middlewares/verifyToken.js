const cookie = require("cookie");
//const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });

const verifyToken = (req, res, next) => {
    // const cookies = cookie.parse(req.headers.cookie || "");

    // const token = cookies.token;
    let token = req.header("Authorization");

    if (!token) {
        return res.status(404).send({ message: "Token not found" });
    }

    token = token.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET);

        console.log(decoded);

        req.id = decoded.user;

        next();
    } catch (err) {
        console.log(err.message);
    }
};
module.exports = { verifyToken };
