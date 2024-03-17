require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie and file middlware
app.use(cookieParser());
app.use(fileUpload());

//morgan middleware
app.use(morgan("tiny"));

//import all routes here
const home = require("./routes/home");

//router middleware
app.use("/api/v1", home);

//export app.js
module.exports = app;
