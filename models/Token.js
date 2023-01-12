const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
    token: { type: String },
    paymentId: { type: String },
    userId: { type: String },
    foodName: { type: String },
    imgUrl: { type: String },
    price: { type: String },
    minutes: { type: String },
    status: { type: String, default: "Active" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", TokenSchema);