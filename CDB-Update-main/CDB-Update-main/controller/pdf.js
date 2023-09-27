const mongoose = require("mongoose");
const PDF = require("../models/PDF");
const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: "djhdfdrld",
  api_key: "122194797381583",
  api_secret: "CmKXKbZmy39O72i4zGaQKAnY9-8",
  secure: true,
});

// exports.addFiles = async(req, res) => {
//     const url = [];
//     try {
//         const file = req.files.file;
//         console.log(file)
//         cloudinary.v2.uploader.upload(file.tempFilePath, async(err, result) => {
//             if(err) throw err;
//             removeTmp(file.tempFilePath);
//             console.log({result});
//             const newPdf = new PDF({
//                 pdf: result.secure_url
//             })
//             newPdf.save();
//         })
//         res.json("Uploaded Successfully");

//     } catch (error) {
//         return res.status(500).json({msg: error.message})
//     }
// }

exports.addFiles = async (req, res) => {
  try {
    const newPdf = new PDF({
      pdf: req.file.originalname,
    });
    newPdf.save();
    res.json("Uploaded");
  } catch (error) {}
};

exports.viewFiles = async (req, res) => {
  try {
    const data = await PDF.find();
    res.json(data);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const { file_name } = req.params;

    const file = fs.createReadStream(`pdfs/${file_name}`);
    const stat = fs.statSync(`pdfs/${file_name}`);
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${file_name}`);
    file.pipe(res);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
