const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// const todoRouter = require('../routes/todos')
const router = require("express").Router();
const todoRouter = require('./routes/todos');
let Todo = require("../model/todo.model");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());





app.use('/todos', todoRouter);

//mongodb://localhost:27017/
const uri = process.env.ATLAS_URI ||  "mongodb+srv://oostermanj:gpH3pQCWeD2qhdNd@practicecluster.ysk2k.mongodb.net/?retryWrites=true&w=majority&appName=practiceCluster";
//mongodb+srv://oostermanj:gpH3pQCWeD2qhdNd@practicecluster.ysk2k.mongodb.net/?retryWrites=true&w=majority&appName=practiceCluster
//mongodb+srv://oostermanj:gpH3pQCWeD2qhdNd@practicecluster.ysk2k.mongodb.net/
//const uri = "mongodb+srv://oostermanj:gpH3pQCWeD2qhdNd@practicecluster.ysk2k.mongodb.net/?retryWrites=true&w=majority&appName=practiceCluster";
// const uri = "mongodb+srv://oostermanj:gpH3pQCWeD2qhdNd@practicecluster.ysk2k.mongodb.net/?retryWrites=true&w=majority&appName=practiceCluster";

// const Schema = mongoose.Schema;

// const todoSchema = new Schema({
//  activity: { type: String, required: true },
// });
// const Todo = mongoose.model("Todo", todoSchema);


// Use this to test an added feature 
// const addTodo = async () => {
// try {
//   await Todo.create([
//     {activity: "test1"}
//   ]);
// } catch (err) {
//   console.error("Error: ", err);
// }

// }
// addTodo();

// we can add a String third parameter, this will be the collection name
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
 console.log("MongoDB database connection established successfully");
});



app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});