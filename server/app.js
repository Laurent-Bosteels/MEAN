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
let allFriends = [];

app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.get('/allFriends',function (request, response){
    response.send(allFriends);
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

app.post('/allFriends', function (request, response) {
    allFriends.push(request.body);
    response.status(200).send({"message" : "Data Received"});
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
