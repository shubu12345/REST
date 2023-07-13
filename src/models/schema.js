const mongoose = require('mongoose');


//Schema for model
const resturentSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required."]
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

//Schema model api
 const Items = mongoose.model("items", resturentSchema);



module.exports = {Items};

