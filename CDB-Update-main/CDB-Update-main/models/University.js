const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ["Catagory not provided"],
    },
    merit: {
      type: String,
      required: ["Question not provided"],
    },
    speciality: {
      type: String,
      required: ["Speciality not provided"],
    },
    city: {
      type: String,
      required: ["Correct Answer not provided"],
    },
    university_page: {
      type: String,
      default: "https://www.google.com",
    },
  },
  {
    timestamps: true,
  }
);

const University = mongoose.model("university", universitySchema);
module.exports = University;
