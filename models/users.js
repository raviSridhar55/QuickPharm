// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model('user', UserSchema);

export default User;
