// models/Survey.js

import mongoose from "mongoose";
import answerSchema from './Answer.js';  // Import the schema directly

const surveySessionSchema = new mongoose.Schema({
  answers: [answerSchema],  // Use answerSchema directly here as an array of subdocuments

  completedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model("Survey", surveySessionSchema);  // Export Survey as a model
