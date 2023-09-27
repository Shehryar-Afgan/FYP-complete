const express = require("express");
const router = express.Router();
const callLogController = require("../controller/callLog");
const { protect } = require("../middleware/auth");

router.post("/setCallLog", protect, callLogController.setCallLog);
router.post("/getCallLog", protect, callLogController.getCallLog);

module.exports = router;
