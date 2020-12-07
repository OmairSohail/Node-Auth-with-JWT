// Entry Point Of This Application

// Importing Packages
const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");

// Config ENV
require("dotenv").config({ path: "./config/config.env" });

const app = express();

// Connecting To MongoDB
connectDb();

// Static Folder

app.use(express.static("public"));

// View Engine

app.set("view engine", "ejs");

const port = process.env.PORT;

// Listening To Server
app.listen(port, console.log(`Server is running on http://localhost:${port}`));

// routes

app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
