const express = require("express");
const router = express.Router();
const pdfController = require("../controller/pdf");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "pdfs");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
router.post("/uploadFiles", upload.single("pdf"), pdfController.addFiles);
router.get("/viewFiles", pdfController.viewFiles);
router.get("/downloadPdf/:file_name", pdfController.downloadFile);

module.exports = router;
