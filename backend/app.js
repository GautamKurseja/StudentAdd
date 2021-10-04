const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("../backend/routes/users")


const app = express();

mongoose
  .connect(
    "mongodb://localhost:27017/addStudent"
  )
  .then(() => {
    console.log("Connected to databaseeeeeee!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
  app.use('/public', express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



app.use("/api/users", userRoutes);


module.exports = app;



