// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: String,
  name: String,
  surname: String,
  region: {
    type: String,
    enum: ['Southern Africa', 'Northern Africa', 'Eastern Africa', 'Western Africa', 'Other']
  },
  preferredLanguage: {
    type: String,
    enum: ['English', 'isiZulu', 'Kiswahili', 'Yoruba', 'French', 'Other']
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  teachingStyle: {
    type: String,
    enum: ['Structured Guide', 'Flexible Facilitator', 'Experimental Innovator', 'Student-Centered Mentor']
  },
  digitalProficiency: {
    type: String,
    enum: ['Poor', 'Intermediate', 'Advanced', 'Not Sure']
  }
});

