const express = require("express");
const Router = express.Router;
const router = new Router();
const DBConnection = require("../dbConnection");
const db = DBConnection.getInstance();

// home
router.get("/", (req, res) => {
    res.send("Hello, this is the home page");
});

router.post('/checkValidCode')