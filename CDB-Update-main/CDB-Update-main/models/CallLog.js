const mongoose = require("mongoose");

const callLogSchema = new mongoose.Schema(
  {
    call_id: {
      type: "string",
    },
    caller: {
      type: "ObjectId",
      ref: "User",
    },
    receiver: {
      type: "ObjectId",
      ref: "User",
    },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CallLog = mongoose.model("CallLog", callLogSchema);
module.exports = CallLog;
