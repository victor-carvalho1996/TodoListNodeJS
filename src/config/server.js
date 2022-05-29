const port = 3003;

const bodyParser = require('body-parser')
const express = require('express');
const server = express()
const cors = require("cors");
const router = require("../routes/index");
const AppError = require("../utils/appError");
const errorHandler = require("../utils/errorHandler");

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});
server.use("/api/todoapp", router);

server.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
server.use(errorHandler);


server.listen(port, function() {
    (async () => {
        const database = require('./database');     
        try {
            //const todoList = await Todo.findByPk(1);
            console.log("connected");
        } catch (error) {
            console.log(error);
        }
    })();
})

module.exports = server;



