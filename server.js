const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const secret = "1234abcABC";
const Port = 4000;
const { loginController } = require('./controllers/controller.js');


app.use(express.json());


app.post("/login", loginController);


app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});