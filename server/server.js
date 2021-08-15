const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config({ path: "../.env" });

const app = express();
app.use(express.json());
app.use(helmet());

// the socket that wraps the server needs http protocol
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

//routes
const auth = require("./app/routes/auth");
const home = require("./app/routes/home");
const questions = require("./app/routes/publicQuestions");
const profile = require("./app/routes/profile");
const messages = require("./app/routes/directMessages");

const {
    sendMessages,
} = require("./app/controllers/user/directMessages/sendMessage");
const {
    getMessages,
} = require("./app/controllers/user/directMessages/getMessages");

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

const emitMessages = (msg) => {
    getMessages(msg.to_id).then((messages) => {
        console.log(messages, "hola");
        io.emit("priv-msg", messages);
    });
};

// socket part
io.on("connection", (socket) => {
    socket.on("priv-msg", (msg) => {
        sendMessages(msg).then(() => {
            emitMessages(msg);
        });
    });
});

//User endpoints
app.use("/auth", auth);
app.use("/home", home);
app.use("/user", questions);
app.use("/profile", profile);
//app.use("/messages", messages);

//logout
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.clearCookie("userId");
    res.clearCookie("photo");
    return res.status(200).send({ message: "Bye bye :)" });
});

const { PORT } = process.env;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
