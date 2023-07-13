const express = require('express');
const schema = require('../models/schema')
const Router = require('router')


const router = Router();


router.get("/", (req, res) => {
    res.send("<h1>Resturent Api</h1>");
});

//find all stored data
router.get("/foods", async(req, res) => {
    try{
        const getFood = await schema.Items.find({});
        res.status(200).json(getFood);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

router.get("/foods/:id", async(req, res) => {
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
router.post("/foods", async(req, res) => {
try{
    const foodItems = await schema.Items.create(req.body);
    res.status(200).json(foodItems);

}catch(error){
    console.log(error.messgae);
    res.status(500).json({message: error.message})
}
});

//update api data
router.put("/foods/:id", async(req, res) => {
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
router.delete("/foods/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const deleteItem = await schema.Items.findByIdAndDelete(id);
        res.status(200).json(deleteItem);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }

});

module.exports = router