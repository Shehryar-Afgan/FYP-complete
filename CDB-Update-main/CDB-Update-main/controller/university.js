const University = require("../models/University");
const mongoose = require("mongoose");

var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addUniversity = async function (req, res) {
  try {
    const { name, merit, speciality, city, universityPage } = req.body;

    await University.create({
      name: name,
      merit: merit,
      speciality: speciality,
      city: city,
      university_page: universityPage,
    });
    const universities = await University.find({});
    sendJsonResponse(res, 200, universities);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};

module.exports.getUniversities = async function (req, res) {
  try {
    const universities = await University.find({});
    sendJsonResponse(res, 200, universities);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};

module.exports.deleteUniversity = async function (req, res) {
  try {
    const { id } = req.params;
    await University.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
    const universities = await University.find({});
    sendJsonResponse(res, 200, universities);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};
