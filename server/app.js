const express = require('express');
const app = express();

/* Route handlers  */
/* List Routes */
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Laurent:Laurent123@friendbook.kqznb.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.once('open', () => {
console.log('connected');
})

/* GET /friends
Purpose: Get all friends */
app.get('/', (req, res) => {
    console.log('Hello World')
})

/* POST /friends
Purpose: Create a new friend */
app.post('/friends', (req, res) => {
    // i want to create a new friend and return the new friend back to the user
    // the friend input fields will be passed in via the JSON req body
})

/* PATCH /friends/:id
Purpose: Create a new friend */
app.patch('/friends/:id', (req, res) => {
    // i want to update the friends with the new values
})

/* PATCH /friends/:id
Purpose: Delete a friend */
app.delete('/friends/:id', (req, res) => {
    // i want to delete a specified friend
})

app.listen(3000, () => {
console.log("Server is listening on port 3000");
})