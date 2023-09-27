const Questions = require("../models/Question");

var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getQuestionsEnglish = async function (req, res) {
  try {

    const english = await Questions.aggregate([
      {
        $match: {
          category: "English",
        },
      },
      {
        $sample: {
          size: 3,
        },
      },
    ]);

    const physics = await Questions.aggregate([
      {
        $match: {
          category: "Physics",
        },
      },
      {
        $sample: {
          size: 2,
        },
      },
    ]);

    const maths = await Questions.aggregate([
      {
        $match: {
          category: "Maths",
        },
      },
      {
        $sample: {
          size: 2,
        },
      },
    ]);

    const chemistry = await Questions.aggregate([
      {
        $match: {
          category: "CC",
        },
      },
      {
        $sample: {
          size: 3,
        },
      },
    ]);



    // sendJsonResponse(res, 200, [...maths, ...english, ...CC]);
    sendJsonResponse(res, 200, [...english,...physics,...maths,...chemistry]);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};

module.exports.getQuestions = async function (req, res) {
  try {
    const english = await Questions.aggregate([
      {
        $match: {
          category: "English",
        },
      },
      {
        $sample: {
          size: 4,
        },
      },
    ]);

    const physics = await Questions.aggregate([
      {
        $match: {
          category: "Physics",
        },
      },
      {
        $sample: {
          size: 3,
        },
      },
    ]);
    const bio = await Questions.aggregate([
      {
        $match: {
          category: "Bio",
        },
      },
      {
        $sample: {
          size: 3,
        },
      },
    ]);

    // const CC = await Questions.aggregate([
    //   {
    //     $match: {
    //       category: "CC",
    //     },
    //   },
    //   {
    //     $sample: {
    //       size: 1,
    //     },
    //   },
    // ]);
     

    // const english = await Questions.aggregate([
    //   {
    //     $match: {
    //       category: "English",
    //     },
    //   },
    //   {
    //     $sample: {
    //       size: 4,
    //     },
    //   },
    // ]);

    // sendJsonResponse(res, 200, [...maths, ...english, ...CC]);
    sendJsonResponse(res, 200, [...english,...physics,...bio]);
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};

module.exports.setQuestions = async function (req, res) {
  try {
    const questions = new Questions({
      category: req.body.category,
      question: req.body.question,
      options: req.body.options,
      correct_answer: req.body.correctAnswer,
    });
    await questions.save();
    sendJsonResponse(res, 201, { message: "Question created" });
  } catch (err) {
    console.log(err);
    sendJsonResponse(res, 400, err);
  }
};

module.exports.addQuestionsBulk = async function (req, res) {
  try {
    const questions = JSON.parse(JSON.stringify(req.body.questions));
    await Questions.insertMany(questions);
    sendJsonResponse(res, 200, { message: "Questions created" });
  } catch (err) {
    console.log(err);
    sendJsonResponse(res, 400, err);
  }
};
