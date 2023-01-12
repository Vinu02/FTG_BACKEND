const router = require("express").Router();
const Mail = require("../models/Mail");

//getAll mails
router.get("/getAll", async (req, res) => {
  try {
    const mails = await Mail.find();
    res.status(200).json(mails);
  } catch (error) {
    res.status(500).json(error);
  }
});

//add mail
router.post("/addMail", async (req, res) => {
  const newMail = new Mail(req.body);
  try {
    const mail = await newMail.save();
    res.status(201).json(mail);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;