const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const defaultAvatar =
  "https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg";

// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: defaultAvatar
  },
  joined: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

// Export Model to be used in the app.
const User = mongoose.model("User", UserSchema);
module.exports = User;
