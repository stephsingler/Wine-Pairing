const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
  fullName: {
    required: true,
    type: String
  },
  userName: {
    required: true,
    type: String,
    lowercase: true,
    unique: true
  },
  passWord: {
    required: true,
    type: String
  }
});
module.exports = mongoose.model("User", UserModel);
