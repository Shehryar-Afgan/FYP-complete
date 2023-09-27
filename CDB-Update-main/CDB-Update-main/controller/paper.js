const mongoose = require("mongoose");
const Paper = require("../models/paper");
const fs = require("fs");

exports.addFiles = async (req, res) => {
  try {
    const { university, year, pdf } = req.body;
    const newPdf = new Paper({
      university,
      year,
      pdf: req.file.originalname,
    });
    newPdf.save();
    res.json("Uploaded");
  } catch (error) {}
};

exports.viewFiles = async (req, res) => {
  try {
    const data = await Paper.find();
    res.json(data);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const { paper } = req.params;

    const file = fs.createReadStream(`papers/${paper}`);
    const stat = fs.statSync(`papers/${paper}`);
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${paper}`);
    file.pipe(res);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
