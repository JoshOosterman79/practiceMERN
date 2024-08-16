# Please finish the BackEnd notes before proceeding to this.

# You will now be designing the FRONTEND of the project.

<Step 1: Install React Files>

- Install the following
# npm init react-app todolist
- todolist is simply the project name I have given it.

<Step 2: make adjustments to App.js>

- We will now make the following changes in the App.js file from yor react-app files (named todolist)

This is the only code that will be in it 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Here we are simply adding a root for the html to run. 

-We also need to edit/add the App.js within the tracker folder. This is the MAIN app.

- We can make the following changes

import logo from './logo.svg';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      Hello World
    </div>
  );
}

export default App;


Before running this app, we need to npm install boostrap and npm install react-router-dom to use those imports we added. make sure we run this command
in the tracker (in this case tracker/tracker since we made two directories by accident)


<Step 3: Add Bootstrap Components to the code>

We will now add some Components to use using bootstrap. This includes a navbar, a create to do list feature and the list itself. 
Ensure the component tab is added to the src folder of tracker/tracker. 

Let's make changes to the main App.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import TodosList from "./components/todos-list.component";
import CreateTodo from "./components/create-todo.component";

function App() {
 return (
 <Router>
 <div className="container">
 <Navbar />
 <br />
 <Routes>
 <Route path="/" exact element={<TodosList />} />
 <Route path="/create" element={<CreateTodo />} />
 </Routes>
 </div>
 </Router>
 );
}

export default App;



Here we are importing react components using bootstrap to the app. Where we are getting these from we will build now.

Note from the class notes and here are different, this is because I change it to make it up-to-date with React 6.0, the changes are

# Paths need to be nested within Router, Routes, and then there own individual Route path =....
# instead of components= , we are using element={<# the name of the Component>}
# With all the changes to make it up-to-date it should work now 

 Create a src directory named components (this is the tracker/tracker directory to build it in)

 From there we add the following js files

 # create-todo.component.js, navbar.component.js, todos-list.component.js

I won't add all the code here in the notes but take a look at the code for each js
as they are the elements needed to build the apps interface. Each code should be explained by ChatGPT as there are codes of blocks I don't understand.

within your tracker/tracker directory, install npm I axios, this is code for us to connect frontEnd to backEnd.

<Step 4: Connecting Front to Back>
It is important to note the features we will use as they will utilize Axios, the library that will bridge the front end to backend by using HTTP requests

Take a look at this code in a create-todolist component

 axios
 .post("http://localhost:5000/todos/add", activityvar)
 .then((res) => {
 window.location = "/";
 });

 This is the code that will post the string inputted in the box into the add list/http we created in the backend. Once you hit the submit button it will perform POST. now let us perform that, but first ensure server.js from the backend is running and it connected to a data base

 From the React App, got to Add a task and put whatever in the box and submit. This will create that "activity" that will display in Task page, more specifically it also is added to the Database. The project also implements a delete button for each "task", and simply clicking on a delete on a certain activity will delete it from the task page and the database. 

Simply now run backend with node server.js and npm start on the routes end!

If all that works congrats you sucessfully manage to create the front end and connect it to the backend! Making you a FullStack Developer!