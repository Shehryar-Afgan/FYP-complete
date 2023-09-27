const express = require("express");
const router = express.Router();
const questionsController = require("../controller/Question");
const { protect } = require("../middleware/auth");

router.post("/set", protect, questionsController.setQuestions);
router.get("/generateenglish", protect, questionsController.getQuestionsEnglish);
router.get("/generate", protect, questionsController.getQuestions);
router.post(
  "/add-questions-bulk",
  protect,
  questionsController.addQuestionsBulk
);

module.exports = router;
