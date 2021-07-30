const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config({ path: "../.env" });

const app = express();
app.use(express.json());
app.use(helmet());

//routes
const auth = require("./app/routes/auth");
const home = require("./app/routes/home");

//cors
const corsConfig = {
    origin: "http://localhost:3000",
};
app.use(cors(corsConfig));

app.get("/", (req, res) => {
    res.status(200).send("welcome to Knowus project application");
});

//User endpoints
app.use("/home", home);
app.use("/", auth);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
