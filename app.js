const express = require("express");
const routes = require("./routes/index");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
routes(app, "/api");

module.exports = app;
