const mongoose = require('mongoose');

const run = () => {
//connecting to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/Resturent-Api") // mongod url
.then(() => console.log("connected sucessfully"))
.catch(() => console.error());
}


module.exports = {run}