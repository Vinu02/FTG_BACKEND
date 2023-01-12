const router = require("express").Router();
const Food = require("../models/Food");

//getAll foods
router.get("/getAll", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json(error);
  }
});

//add food
router.post("/addFood", async (req, res) => {
  const newFood = new Food(req.body);
  try {
    const food = await newFood.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;