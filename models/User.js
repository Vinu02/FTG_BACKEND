const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: String },
  address: { type: String },
  city: { type: String },
  country: { type: String },
  postal: { type: String },
  isChef: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);