const express = require("express");
const app = express();
require("dotenv").config();

const repositorio = require("./repositorio");

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/v1/frases-amlo/:num?", (req, res, next) => {
  res.send(repositorio.getRandom(req.params.num || 1));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log("Server running on port", port);
});
