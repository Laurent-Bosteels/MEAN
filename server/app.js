const express = require("express");
const app = express();
const Friend = require("./models/friend.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE,OPTIONS");
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

app.post("/", function (request, response) {
  response.status(200).send({ message: "Data received" });
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

//getFriend middleware
async function getFriend(req, res, next) {
  let friend;
  try {
    friend = await Friend.findById(req.params.id);
    if (friend == null) {
      return res.status(404).json({ message: "Cannot find User" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.friend = friend;
  next();
}

//Get One
app.get("/:id", getFriend, (req, res) => {
  res.json(res.friend);
});

//Put One (Update)
// app.put("/:id", getFriend, async (req, res) => {
//     try {
//       const updatedFriend = await res.friend.set(req.body);
//       res.json(updatedFriend);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//Patch One
app.patch("/:id", getFriend, async (req, res) => {
  if (req.body.fname != null) {
    res.friend.fname = req.body.fname;
  }
  if (req.body.lname != null) {
    res.friend.lname = req.body.lname;
  }
  if (req.body.email != null) {
    res.friend.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.friend.phone = req.body.phone;
  }
  if (req.body.language != null) {
    res.friend.language = req.body.language;
  }
  try {
    const updatedFriend = await res.friend.save();
    res.json(updatedFriend);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete One
app.delete("/delete/:id", getFriend, async (req, res) => {
  try {
    await res.friend.deleteOne();
    res.json({ message: "Friend has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
