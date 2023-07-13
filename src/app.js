const express = require("express");
const app = express();
// const mongoose = require('mongoose');
require('./db/db');
const router = require("./router/resturent");


//middleware
app.use(express.json());

//app to use router
app.use(router);


//app lisons at port 3000 at local
app.listen(3000, (req, res) => {
    console.log("Server is up at port: 3000");
});