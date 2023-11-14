const express = require("express"); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const validator = require("validator");

const bodyParser = require("body-parser"); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

// Route to Login Page
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

app.post("/login", (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;

  if (validator.isEmail(username)) {
    // The email address is valid
    console.log("Email is Valid");
  } else {
    // The email address is invalid
    console.log("Email is In Valid");
  }
  res.send(`Username: ${username} Password: ${password}`);
  console.log(username, password);
});

const port = 3000; // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));