const Academics = require("../models/Academics");
const mongoose = require("mongoose");

var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addAcademics = async function (req, res) {
  try {
    const { fullName, matricMarks, school, fscMarks, college } = req.body;
    const userId = req.user._id;

    await Academics.create({
      full_name: fullName,
      matric_marks: matricMarks,
      school: school,
      fsc_marks: fscMarks,
      college: college,
      user: userId,
    });
    const academics = await Academics.find({});
    sendJsonResponse(res, 200, academics);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};

module.exports.getAcademics = async function (req, res) {
  try {
    const userId = req.user._id;
    const academics = await Academics.find({ user: userId });
    sendJsonResponse(res, 200, academics);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};

module.exports.deleteAcademics = async function (req, res) {
  try {
    const { id } = req.params;
    await Academics.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
    const academics = await Academics.find({});
    sendJsonResponse(res, 200, academics);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};
