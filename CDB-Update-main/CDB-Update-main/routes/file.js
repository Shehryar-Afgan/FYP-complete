const express = require("express");
const router = express.Router();
const fileController = require("../controller/files");
const uploadFile = require("../middleware/uploadFile");
const multer = require("multer");
const { protect } = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "applicants");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.post(
  "/uploadFsc",
  upload.fields([
    { name: "file", count: 1 },
    { name: "matric", count: 1 },
    { name: "fsc", count: 1 },
  ]),
  fileController.addFsc
);
router.post("/get-files-for-applicant", fileController.getFilesForApplicant);
router.post("/addFile", fileController.addFile);
router.get("/download/:id", fileController.download);
router.get("/viewApplicants", protect, fileController.viewApplicants);

module.exports = router;
