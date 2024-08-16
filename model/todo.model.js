const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
 activity: { type: String, required: true },
});

// we can add a String third parameter, this will be the collection name
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;