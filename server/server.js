const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config({ path: "../.env" });

const app = express();
app.use(express.json());
app.use(helmet());

// cors
const corsConfig = {
    origin: ["http://localhost:3000", "https://client-knowus.herokuapp.com/"],
    credentials: true,
};
app.use(cors(corsConfig));

// the socket that wraps the server needs http protocol
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: [
            "http://localhost:3000",
            "https://client-knowus.herokuapp.com/",
        ],
        methods: ["GET", "POST"],
    },
});

// routes
const auth = require("./app/routes/auth");
const home = require("./app/routes/home");
const questions = require("./app/routes/publicQuestions");
const profile = require("./app/routes/profile");
const messages = require("./app/routes/directMessages");

// middlewares
const {
    sendMessages,
} = require("./app/middlewares/directMessages/sendMessage");
const { getMessages } = require("./app/middlewares/directMessages/getMessages");

console.log(process.env.FRONT_ORIGIN, "impriendo el front origin");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONT_ORIGIN);
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

app.get("/", (req, res) => {
    res.status(200).send(
        "welcome to Knowus project application, you can use /auth, /home or /user"
    );
});

// -----------------------------------------------
// socket part
const emitMessages = (msg) => {
    getMessages(msg.to_id, msg.from_id).then((result) => {
        io.emit("priv-msg", result);
    });
};

io.on("connection", (socket) => {
    // this socket just receive the users-id and  send all the messages
    socket.on("users", (userId) => {
        emitMessages(userId);
    });
    // this socket listen the message, save in database and get all the messages again
    socket.on("priv-msg", (msg) => {
        sendMessages(msg).then(() => {
            emitMessages(msg);
        });
    });
});
//-----------------------------------------------
// User endpoints
app.use("/auth", auth);
app.use("/home", home);
app.use("/user", questions);
app.use("/profile", profile);
app.use("/message", messages);

// logout
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
