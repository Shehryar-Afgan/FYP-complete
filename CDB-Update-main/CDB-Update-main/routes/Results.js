const express = require("express");
const router = express.Router();
const resultsController = require("../controller/Results");
const { protect } = require("../middleware/auth");

router.post("/set", protect, resultsController.setResults);
router.get("/get", protect, resultsController.getResults);
router.get("/test-standings", protect, resultsController.testStandings);

module.exports = router;
