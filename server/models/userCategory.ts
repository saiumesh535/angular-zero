import mongoose from 'mongoose';

const userCategory = new mongoose.Schema({
  id: {
    unique: true,
    required: true,
    type: Number,
    index: true,
  },
  type: {
    unique: true,
    required: true,
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});


/* this is for create mongodb collection(table in general) based on created schema */
export const userCategoryModel = mongoose.model('usercategory', userCategory);
