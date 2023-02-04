const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide name"],
    minlength: 3,
    maxlength: 25,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Enter a valid email",
    }, 
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 8,
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    default: "",
  },

  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "20",
  },
});

module.exports = mongoose.model("User", UserSchema);
