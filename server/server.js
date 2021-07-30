const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { verify } = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });

//controllers
const { signup } = require("./app/controllers/signup");

//middlewares
const {
    verifyUsernameExists,
} = require("./app/middlewares/verifyUsernameExists");
const app = express();

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

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
