const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config({ path: "../.env" });

const { signup } = require("./app/controllers/signup");

const app = express();

const corsConfig = {
    origin: "http://localhost:3000",
};

app.use(cors(corsConfig));
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("welcome to Knowus project application");
});
app.post("/signup", signup);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
