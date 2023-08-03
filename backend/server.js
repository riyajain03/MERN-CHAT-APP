const express = require("express");
const { chats } = require("./data/data");
const dotEnv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/db');
const colors = require("colors");

dotEnv.config();

connectDB();
const app = express();
app.use(cors());

app.get("/route", (req, res) => {
  res.send("api is running");
});

app.get("/api/chat", (req, res) => {
  if (req.query.id) {
    console.log(req.query.id);
    const singleId = chats.find((chat) => chat._id === req.query.id);
    res.send(singleId);
  }
  res.send(chats);
});

const port = process.env.PORT || 40001;
app.listen(port, console.log(`Server started on port ${port}`.yellow.bold));
