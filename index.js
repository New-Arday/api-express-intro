//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());

//Start up our server
const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  console.log("got request!");
  res.send("Hello!");
});
app.get("/bye", (req, res) => {
  res.send({ msg: "doei!" });
});

app.delete("/bye", (req, res) => {
  res.send({ msg: "vaarwel voor altijd!" });
});
let counter = 0;
//mplement the following express routes in your application:

//* The above `/bye` route

//* A GET `/greeting` route that returns the json object `{greeting: 'good day'}`
app.get("/greeting", (require, response) => {
  counter++;
  response.send({ greeting: "goedendag" });
});
//* A GET `/greeting/morning` route that returns `{greeting: 'good morning'}`
app.get("/greeting/morning", (require, response) => {
  counter++;
  response.send({ greeting: "goedemorgen" });
});
//* A GET `/greeting/afternoon` route that returns `{greeting: 'good afternoon'}`
app.get("/greeting/afternoon", (require, response) => {
  counter++;
  response.send({ greeting: "goedenmiddag" });
});
//* A DELETE `/greeting/` route that returns `{greeting: 'good bye'}`
app.delete("/greeting", (require, response) => {
  counter++;
  response.send({ greeting: "tot ziens" });
});
//Every time a `/greeting` route is called, increment a counter. Add a new route, GET `/count` that returns the value of the counter.
app.get("/count", (require, response) => {
  response.send({ count: counter });
});
