const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
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
    minlength: 0,
    maxlength: 20,
    default: "",
  },

  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "your location",
  },
});

UserSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  delete obj._id
  delete obj.__v
  return obj;
};

UserSchema.pre("save", async function () {
  const salt = await bcryptjs.genSalt(12);
  this.password = await bcryptjs.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function(userPassword){
  const isMatch = await bcryptjs.compare(userPassword, this.password)
  return isMatch
}

module.exports = mongoose.model("User", UserSchema);
