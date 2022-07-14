const express = require("express");
const cors = require("cors");
const app = express();

const dogsController = require("./controllers/dogs")

app.use(cors());
app.use(express.json());

app.use('/dogs', dogsController)

module.exports = app;
