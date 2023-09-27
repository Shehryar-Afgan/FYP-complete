const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      trim: true,
      required: ["Catagory not provided"],
    },
    question: {
      type: String,
      trim: true,
      required: ["Question not provided"],
    },
    options: {
      type: Array,
      default: [],
    },
    correct_answer: {
      type: String,
      trim: true,
      required: ["Correct Answer not provided"],
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionsSchema);
module.exports = Question;
