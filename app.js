const express = require("express");
const app = express();
// const mongoose = require('mongoose');
const db = require('./db');
const schema = require('./models/schema');


//middleware
app.use(express.json());

//connectind to database
db.run();


app.get("/", (req, res) => {
    res.send("<h1>Resturent Api</h1>");
});

//find all stored data
app.get("/foods", async(req, res) => {
    try{
        const getFood = await schema.Items.find({});
        res.status(200).json(getFood);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

app.get("/foods/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const getFood = await schema.Items.findById(id);
        res.status(200).json(getFood);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//add api data
app.post("/foods", async(req, res) => {
try{
    const foodItems = await schema.Items.create(req.body);
    res.status(200).json(foodItems);

}catch(error){
    console.log(error.messgae);
    res.status(500).json({message: error.message})
}
});

//update api data
app.put("/foods/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const getData = await schema.Items.findByIdAndUpdate(id, req.body);
        if(!getData){
            res.status(404).json({message: "Cannot found match for given id"});
        }
        res.status(200).json(getData);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//delete api data
app.delete("/foods/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const deleteItem = await schema.Items.findByIdAndDelete(id);
        res.status(200).json(deleteItem);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }

})

app.listen(3000, (req, res) => {
    console.log("Server is up at port: 3000");
});