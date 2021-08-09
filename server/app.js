const express = require("express");
const app = express();
const Friend = require("./models/friend.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

/* Mongoose connection */
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Laurent:Laurent123@friendbook.kqznb.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected");
});

/* Route handlers */
/* List Routes */

app.get("/", function (request, response) {
  response.send("Hello from server");
});

// Get All Route
app.get("/allFriends", async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/", function (request, response) {
  response.status(200).send({ message: "Data received" });
});

// Create One Route
app.post("/allFriends", async (req, res) => {
  const friend = new Friend({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    language: req.body.language,
  });
  try {
    const newFriend = await friend.save();
    res.status(201).json({ newFriend });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
