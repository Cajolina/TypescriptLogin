const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  email: String,
  password: String,
  fistName: String,
  lastName: String,
  age: Number,
  phoneNumber: String,
  shoeSize: Number,
  catOwner: Boolean,
});

const UserModel = models.user || model("user", userSchema);

module.exports = { UserModel };
