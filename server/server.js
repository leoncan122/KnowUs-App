const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config({ path: "../.env" });

//controllers
const { signup } = require("./app/controllers/auth/signup");
const { getRandomRequests } = require("./app/controllers/user/home");

//middlewares
const {
    verifyUsernameExists,
} = require("./app/middlewares/verifyUsernameExists");
const { verifyToken } = require("./app/middlewares/verifyToken");

//cors
const corsConfig = {
    origin: "http://localhost:3000",
};

app.use(cors(corsConfig));
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("welcome to Knowus project application");
});

//Authorization endpoints
app.post("/signup", verifyUsernameExists, signup);

//User endpoints
app.get("/home", verifyToken, getRandomRequests);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
