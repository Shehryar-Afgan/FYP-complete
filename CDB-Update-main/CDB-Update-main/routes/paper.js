const express = require("express");
const router = express.Router();
const paperRouter = require("../controller/paper");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "papers");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.post("/addPaper", upload.single("pdf"), paperRouter.addFiles);
router.get("/viewPaper", paperRouter.viewFiles);
router.get("/downloadPaper/:paper", paperRouter.downloadFile);

module.exports = router;
