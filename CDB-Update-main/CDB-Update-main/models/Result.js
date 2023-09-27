const mongoose = require("mongoose");

const categoryWiseMarks = {
  categoryType: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  marks: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
};

const resultsSchema = new mongoose.Schema(
  {
    user: {
      type: "ObjectId",
      ref: "User",
      required: true,
    },
    category: {
      type: [categoryWiseMarks], // array of category marks
      default: [],
    },
    total: {
      type: Number,
      default: 0,
    },
    obtained: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Result = mongoose.model("Result", resultsSchema);
module.exports = Result;
