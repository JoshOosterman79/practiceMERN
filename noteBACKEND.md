HOW TO MERN:

Before beginning this let us start with the backend and creating the follow

npx create-react-app tracker
npm install mongodb
cd tracker
mkdir backend
- cd backend
- npm init -y
- npm install express cors mongoose dotenv

gpH3pQCWeD2qhdNd


<Step 1: Connect to the MongoDB Atlus>
- Let's now login to the Atlus and create ourselves a cluster. 
<here is the passcode for MongoDB in case you need it for accessing the MongoDB Atlus database>

gpH3pQCWeD2qhdNd

from there we need to get the native driver

const uri = "mongodb+srv://oostermanj:<password>@practicecluster.ysk2k.mongodb.net/?retryWrites=true&w=majority&appName=practiceCluster";

This is what we will use to connect to the MongoDB. replace the password placeholder with the actual password, and remove the arrows as well. When
getting this link from Atlus, make sure you select from Drivers, and use the latest Node version as the selection.


- In case a error occurs due to IP address, just turn off your VPN and use you local IP.

<Step 2: Create your Backend Files>
Follow these commands
mkdir backend
- cd backend
- npm init -y
- npm install express cors mongoose dotenv

-this will install the necessary files and also create a backend folder.
- Let's also add a server.js file to the backend


Let us also add the following code to the server.js
<requires/declarations>
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// require('dotenv').config();

<code>
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use('/todos', todoRouter);

<listen>
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});

Here is a little explanation of what is happening here. 

Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and
access resources from remote hosts. The cors package provides an Express middleware that can
that can enable CORS with different options.
- And we already discussed mongoose. It makes interacting with MongoDB through Node.js
simpler.
- dotenv loads environment variables from a .env file into process.env. This makes development
simpler. Instead of setting environment variables on our development machine, they can be
stored in a file. We’ll create the .env file later.

We can also run code AND make edit using the following: <node server.js>
- be sure to be in the backend file before running.

Let us now add the following code to the code section 

const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://oostermanj:gpH3pQCWeD2qhdNd@practicecluster.ysk2k.mongodb.net/?retryWrites=true&w=majority&appName=practiceCluster";
true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
 console.log("MongoDB database connection established successfully");
});

- This will be the code to connect to the MongoDB


<Step 3: Routes Folder>
- By creating a routes page we will be able to direct all of our endpoints to here. Let's now make a routes directory using mkdir routes.
- From here, add the following to the server.js in the coding section

const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);

- This will 1) require the code from the future todos file that we will make in a bit
2) and be able to use this router feature when we run code.

Let's now add code to this todos.js file

<!-- const router = require("express").Router();
let Todo = require("../models/todo.model");
router.route("/").get((req, res) => {
 Todo.find()
 .then((todos) => res.json(todos))
 .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
 const activity = req.body.activity;
10
 const newTodo = new Todo({
 activity,
 });
 newTodo
 .save()
 .then(() => res.json("Todo added!"))
 .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
 Todo.findById(req.params.id)
 .then((todo) => res.json(todo))
 .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
 Todo.findByIdAndDelete(req.params.id)
 .then(() => res.json("Todo deleted."))
 .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
 Todo.findById(req.params.id)
 .then((todo) => {
 todo.activity = req.body.activity;
 todo
 .save()
 .then(() => res.json("Todo updated!"))
 .catch((err) => res.status(400).json("Error: " + err));
 })
 .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router; -->

Based on this code we now have
- Router to update
- Router to delete
- And overall saving, and catching errors!
- Be sure you check the variables and export name if you want to recycle this code
for future projects.

<Step 4: Models Folder>
- When using MongoDB it is important to create models and utilizing schemas to create an entry into our database. Which is why we will now create a model for our database. First create a model directory and a js file todo.model.js within this new directory.

We will now add the following code to this new file 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema({
 activity: { type: String, required: true },
});
const Todo = mongoose.model("Todo", todoSchema);
11
module.exports = Todo;

This will create a data entry with a "String" as a value.

<Step 5: Test on Postman>

We will now test our project using Postman. Make sure server.js is running before hand.

// Update on Running server

// Be sure to install mongoose, express, cors, and dotenv in root directory (the main file)

// Also delete usecreateindex from the Mongodb as this causes errors


UPDATE: for whatever reason accessing todos.js from routes is not working. So Copy and Paste whatever from todos into server and make the adjustments.

- When using postman you want to use POST, and the following url http://localhost:5000/todos/add, from here go to the body and write in json
format whatever value you want to add, in this case like so

{
    "activity": "test1"
}

then simply request/Send and it will be sent.

We can also do the following for update/delete

http://localhost:5000/todos/ -> Would display any activity with an id. This ID is important as it will be used for delete/update

http://localhost:5000/todos/<id> -> with POSTMAN option to DELETE, whichever id we put would be deleted from the DB

http://localhost:5000/todos/update/66bc2f544c7b486a896bf982 -> Using Post, we can rewrite the value of the id using json once again.

Congrats you now know how to use Postman! And are done with the backend.





