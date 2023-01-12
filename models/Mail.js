const mongoose = require("mongoose");

const MailSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    msg: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mail", MailSchema);