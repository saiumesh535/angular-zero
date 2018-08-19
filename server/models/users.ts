import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    unique: true,
    required: true,
    type: String,
    index: true,
  },
  password: {
    unique: false,
    required: true,
    type: String
  },
  email: {
    unique: true,
    required: true,
    type: String,
  },
  category: {
    unique: false,
    required: false,
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  socialLink: {
    unique: false,
    required: false,
    type: String,
  }
});


/* this is for create mongodb collection(table in general) based on created schema */
export const usersModel = mongoose.model('users', userSchema);
