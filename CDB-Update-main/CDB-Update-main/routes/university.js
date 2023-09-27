const express = require("express");
const router = express.Router();
const universityController = require("../controller/university");
const { protect } = require("../middleware/auth");

router.post("/add-university", protect, universityController.addUniversity);
router.get("/get-university", protect, universityController.getUniversities);
router.get(
  "/delete-university/:id",
  protect,
  universityController.deleteUniversity
);

module.exports = router;
