const mongoose = require("mongoose");
const Question = require("./models/Question");

const url =
  "mongodb+srv://hawg_devs:dev123@devscluster.ks4rryd.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  const questions = JSON.parse(JSON.stringify(require("./seedData.json")));
  Question.insertMany(questions);
});
