const mongoose = require("mongoose");
// const { string } = require("prop-types");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "organizer", "admin"],
    default: "user"
  },
  interest: {
    type : String
  }
}, {
  versionKey: false
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel
};
