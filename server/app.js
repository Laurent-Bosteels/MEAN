const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Friend = require('./models/friend.model')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

/* Mongoose connection */
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Laurent:Laurent123@friendbook.kqznb.mongodb.net', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.once('open', () => {
console.log('connected');
})

/* Route handlers */
/* List Routes */

/* GET  */
app.get('/',function (request, response){
    console.log('Hello World');
    let friend = new Friend({
        fname: 'Eddy',
        lname: 'Merckx',
        phone: '0469696969',
        email: 'eddymerckx@becode.com',
        language: 'PHP',
    });

    friend.save()

});


/* GET /friends
Purpose: Get all friends */
app.get('/allFriends',function (request, response){
    response.send(allFriends);
});

/* POST /friends
Purpose: Create a new friend */
app.post('/allFriends', function (request, response) {
    allFriends.push(request.body);
    response.status(200).send({"message" : "Data Received"});
});

app.listen(3000, () => {
console.log("Server is listening on port 3000");
})