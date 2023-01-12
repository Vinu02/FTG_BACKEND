const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoute = require("./routes/user");
const foodRoute = require("./routes/food");
const mailRoute = require("./routes/mail");
const tokenRoute = require("./routes/token");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
//db config
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // mongoose
  //   .connect("mongodb://localhost:27017/foodToken")
  .then(() => console.log("MONGODB Connected successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  console.log("Home");
  //res.status(200).json("Home");
});
app.use("/user", userRoute);
app.use("/food", foodRoute);
app.use("/mail", mailRoute);
app.use("/token", tokenRoute);

app.listen(PORT, () => {
  console.log("Server is running in :" + PORT);
});