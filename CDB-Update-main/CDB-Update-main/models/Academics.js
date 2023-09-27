const mongoose = require("mongoose");

const academicSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: ["Full name not provided"],
    },
    matric_marks: {
      type: String,
      required: ["Metric marks not provided"],
    },
    school: {
      type: String,
      required: ["School not provided"],
    },
    fsc_marks: {
      type: String,
      required: ["Fsc. marks not provided"],
    },
    college: {
      type: String,
      required: ["College not provided"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Academics = mongoose.model("academics", academicSchema);
module.exports = Academics;
