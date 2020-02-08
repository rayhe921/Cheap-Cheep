const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  email: {
    type: String,
    trim: true,
    required: true,
    // validate: {
    //   validator: () => Promise.resolve(false),
    //   message: 'Email validation failed'
    // }

  }
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
