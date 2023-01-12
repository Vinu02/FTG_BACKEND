const router = require("express").Router();
const Token = require("../models/Token");

//getAll tokens
router.get("/getAll", async (req, res) => {
  try {
    const tokens = await Token.find();
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get token by userId
router.get("/getByUserId/:id", async (req, res) => {
  try {
    const tokens = await Token.find({ userId: req.params.id });
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get token count by month wise
router.get("/getMonthCount", async (req, res) => {
  try {
    const data = await Token.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

//add token
router.post("/addToken", async (req, res) => {
  const newToken = new Token(req.body);
  try {
    const token = await newToken.save();
    res.status(201).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
});

//upd status
router.post("/updStatus/:id", async (req, res) => {
  try {
    const updData = await Token.findByIdAndUpdate(
      { _id: req.params.id },
      { status: req.body.status },
      { new: true }
    );
    res.status(200).json(updData.status);

    //res.status(200).json(urls);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;