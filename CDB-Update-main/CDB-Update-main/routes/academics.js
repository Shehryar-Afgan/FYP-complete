const express = require("express");
const router = express.Router();
const academicsController = require("../controller/academics");
const { protect } = require("../middleware/auth");

router.post("/add-academics", protect, academicsController.addAcademics);
router.get("/get-academics", protect, academicsController.getAcademics);
router.get(
  "/delete-academics/:id",
  protect,
  academicsController.deleteAcademics
);

module.exports = router;
