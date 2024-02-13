const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const dotenv = require('dotenv').config();

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/v1/frases-amlo/:num?", (req, res, next) => {
  res.send("Me canso ganso");
});

app.listen(port, function () {
  console.log("Server running on port", port);
});
