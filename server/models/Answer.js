// models/Answer.js

import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: {
    type: Number,
    required: true
  },
  answer: {
    type: mongoose.Schema.Types.Mixed,  // Supports both ratings (number) and text
    required: false
  }
});

export default answerSchema;  // Exporting schema directly, not as a model
