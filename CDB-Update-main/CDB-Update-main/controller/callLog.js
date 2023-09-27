const CallLog = require("../models/CallLog");
const mongoose = require("mongoose");

var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

const fetchUserLogs = async (userId) => {
  return await CallLog.aggregate([
    {
      $match: {
        $or: [
          {
            caller: new mongoose.Types.ObjectId(userId),
          },
          {
            receiver: new mongoose.Types.ObjectId(userId),
          },
        ],
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "receiver",
        foreignField: "_id",
        as: "receiving_user",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "caller",
        foreignField: "_id",
        as: "calling_user",
      },
    },
  ]);
};

module.exports.setCallLog = async (req, res) => {
  try {
    const { callId, caller, receiver, startTime, endTime } = req.body;
    const exists = await CallLog.aggregate([
      {
        $match: {
          $and: [
            { caller: new mongoose.Types.ObjectId(caller) },
            { start_time: new Date(startTime) },
          ],
        },
      },
    ]);

    if (exists.length === 0) {
      const call = new CallLog({
        call_id: callId,
        caller: caller,
        receiver: receiver,
        start_time: startTime,
        end_time: endTime,
      });
      await call.save();
    }

    const logs = await fetchUserLogs(userId);
    sendJsonResponse(res, 200, logs);
  } catch (err) {
    console.log(err);
    sendJsonResponse(res, 400, err);
  }
};

module.exports.getCallLog = async (req, res) => {
  try {
    const { userId } = req.body;
    const logs = await fetchUserLogs(userId);
    sendJsonResponse(res, 200, logs);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};
