const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  desc: { type: String },
  imgUrl: { type: String },
  price: { type: String },
  minutes: { type: String },
});

module.exports = mongoose.model("Food", FoodSchema);