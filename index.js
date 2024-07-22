const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const route = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(route, () => console.log(`Running on port ${route}`));
