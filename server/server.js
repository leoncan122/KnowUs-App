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
const questions = require("./app/routes/publicQuestions");
<<<<<<< HEAD
const profile = require("./app/routes/profile");
=======
const { search } = require("./app/routes/auth");
>>>>>>> 429ded80c28759979e83c912d4fcff3f1c7b84be

//cors
const corsConfig = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsConfig));

app.get("/", (req, res) => {
    res.status(200).send(
        "welcome to Knowus project application, you can use /auth, /home or /user"
    );
});

//User endpoints
app.use("/auth", auth);
app.use("/home", home);
app.use("/user", questions);
app.use("/profile", profile);

//logout
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.clearCookie("userId");
    res.clearCookie("photo");
    return res.status(200).send({ message: "Bye bye :)" });
});

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
