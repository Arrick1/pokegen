const express = require("express");
const app = express();
const session = require("express-session");
const logger = require("morgan");
const PORT = process.env.PORT || 8070
const methodOverride = require("method-override");
require("dotenv").config()
require("./db/db")

const userController = require("./controllers/usersCtrl");
const cardsController = require("./controllers/cardsCtrl");
const authController = require("./controllers/authCtrl");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(session({
    secret: "gotta catch them all",
    resave: false,
    saveUninitialized: false
}))

app.use("/users", userController);
app.use("/cards", cardsController);
app.use("/auth", authController);

app.listen(PORT, ()=> {
    console.log("connected on", PORT)
})