const Result = require("../models/Result");
const User = require("../models/User");

var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.setResults = async function (req, res) {
  try {
    const { total, category, obtained } = req.body;
    if (total!==undefined && obtained!==undefined) {
      let result = new Result({
        user: req.user.id,
        category: category,
        total: total,
        obtained: obtained,
      });
      result = await result.save();
      sendJsonResponse(res, 200, { ...result });
    }
  } catch (err) {
    sendJsonResponse(res, 400, err);
  }
};

module.exports.getResults = async function (req, res) {
  try {
    const result = await Result.findOne({ user: req.user._id }, null, {
      sort: { createdAt: -1 },
    });
    if (result !== null) {
      sendJsonResponse(res, 200, result);
    } else {
      sendJsonResponse(res, 404, { message: "No results available" });
    }
  } catch (err) {
    console.log(err);
    sendJsonResponse(res, 400, err);
  }
};

module.exports.testStandings = async function (req, res) {
  try {
    let result = await Result.aggregate([
      {
        $sort: {
          obtained: -1,
        },
      },
    ]);
    result = await User.populate(result, { path: "user" });
    if (result !== null) {
      sendJsonResponse(res, 200, result);
    } else {
      sendJsonResponse(res, 404, { message: "No results available" });
    }
  } catch (err) {
    console.log(err);
    sendJsonResponse(res, 400, err);
  }
};
