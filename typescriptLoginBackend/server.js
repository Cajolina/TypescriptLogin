const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");

const app = express();
const { UserModel } = require("./user.model");
app.use(express.json());
app.use(
  cookieSession({
    secret: "s3cr3t",
    maxAge: 1000 * 1000,
    httpOnly: false,
  })
);
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200,
  })
);

app.post("/api/register", async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body);
    newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

app.post("/api/login", async (req, res, next) => {
  try {
    const loginUser = req.body;

    const user = await UserModel.findOne({
      email: loginUser.loginInput,
    });

    if (!user || user.password != loginUser.loginPassword) {
      return res.status(400).json("Wrong email or password!");
    }
    req.session = user;
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

app.post("/api/logout", async (req, res, next) => {
  try {
    req.session = null;
    res.status(200).json("Logged out!");
  } catch (error) {
    next(error);
  }
});

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb://127.0.0.1:27017/häst");
  //   const connection = mongoose.connection;
  //   connection.once("open", () => {
  console.log("Connected to database");
  app.listen(3000, () => console.log("Server is up and running"));
  //   });
}
main();
