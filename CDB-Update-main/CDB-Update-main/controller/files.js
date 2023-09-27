const mongoose = require("mongoose");
const File = require("../models/Files");
const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: "djhdfdrld",
  api_key: "122194797381583",
  api_secret: "CmKXKbZmy39O72i4zGaQKAnY9-8",
  secure: true,
});

exports.addFile = async (req, res) => {
  try {
    const file = req.files.file;
    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      {
        folder: "avatar",
        width: 150,
        height: 150,
        crop: "fill",
      },
      async (err, result) => {
        if (err) throw err;
        console.log({ result });
        const files = new File({
          cv: result.secure_url,
        });
        files.save();
        return res.json("Send Successfully");
      }
    );
  } catch (error) {}
};

exports.addFsc = async (req, res) => {
  const url = [];
  try {
    const file = req.files?.file;
    const matric = req.files?.matric;
    const fsc = req.files?.fsc;
    const { name, email, job_id } = req.body;

    console.log(file, matric, fsc);

    const files = await File.create({
      cv: file[0].originalname,
      matric: matric[0].originalname,
      fsc: fsc[0].originalname,
      email: email,
      name: name,
      job_id: job_id,
    });
    return res.json(files);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getFilesForApplicant = async (req, res) => {
  try {
    const { name, email } = req.body;
    const data = await File.find({ name: name, email: email });

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.download = async (req, res) => {
  try {
    const { id } = req.params;

    const file = fs.createReadStream(`applicants/${id}`);
    const stat = fs.statSync(`applicants/${id}`);
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${id}`);
    file.pipe(res);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.viewApplicants = async (req, res) => {
  try {
    const data = await File.aggregate([
      {
        $lookup: {
          from: 'jobs', 
          localField: 'job_id', 
          foreignField: '_id', 
          as: 'job_id'
        }
      }, {
        $match: {
          'job_id.posted_by': req.user._id
        }
      }
    ]);
    res.json(data);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
