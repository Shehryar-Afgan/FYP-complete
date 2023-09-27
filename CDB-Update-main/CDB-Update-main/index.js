const express = require("express");
const mongoose = require("mongoose");
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
const jobRouter = require("./routes/job");
const testRouter = require("./routes/test");
const fileRouter = require("./routes/file");
const pdfController = require("./routes/pdf");
const videoRouter = require("./routes/video");
const paperRouter = require("./routes/paper");
const replyRouter = require("./routes/reply");
const discussionRouter = require("./routes/discussion");
const questionsRouter = require("./routes/Questions");
const resultsRouter = require("./routes/Results");
const callLogRouter = require("./routes/callLog");
const universityRouter = require("./routes/university");
const academicsRouter = require("./routes/academics");

// const Questions = require("../models/Question");
const Questions=require('./models/Question');

const app = express();
app.get('/', function (req, res) {
  res.json('This is my career dev')
})
const url22 = 'https://meritnotes.com/tnpsc-model-questions/biology-questions/2-654/'
app.get('/bioquestion', (req, res) => {
  axios(url22)
      .then(response => {
          const html = response.data
          const $ = cheerio.load(html)
          const questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Bio',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          res.json("Success")
      }).catch(err => console.log(err))
      
      
})
app.get('/viewbioquestion', (req, res) => {
  axios(url22)
      .then(response => {
          const html = response.data
          const $ = cheerio.load(html)
          const questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         
          
          
          res.json(questions)
      }).catch(err => console.log(err))
      
      
})
var url2 = 'https://meritnotes.com/general-english/transformation-questions/1-7396/'
app.get('/question', (req, res) => {
  axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'English',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
   
      }).catch(err => console.log(err))
      var url2 = 'https://meritnotes.com/general-english/verbal-ability-transformation/1-7395/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'English',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/general-english/transformation-quiz/1-7397/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'English',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/general-english/transformation-sentences/1-7398/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'English',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/general-english/grammar-transformation-mcq/1-7399/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'English',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/gk-questions/online-physics-questions/1-434/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/gk-questions/online-physics-test/1-527/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/gk-questions/physics-quiz-upsc/1-529/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/gk-questions/physics-quiz-ssc/1-841/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/gk-questions/physics-quiz-ias/1-842/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/gk-questions/neet-physics/1-77056/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/gk-questions/physics-neet-questions/1-77057/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/gk-questions/high-school-physics/1-77058/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/gk-questions/tnpsc-physics-mcqs/1-77059/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Physics',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/tnpsc-model-questions/biology-questions/1-654/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Bio',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/biology-quiz/1-655/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Bio',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/botany-questions/1-656/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Bio',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/botany-quiz/1-657/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Bio',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/biology-model-questions/1-658/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Bio',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/tnpsc-model-questions/previous-year-questions/1-659/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Bio',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/engineering-questions/computer-quiz-pdf-online/1-78663/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Computer',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/engineering-questions/fundamental-of-computer-pdf/1-78800/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Computer',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/engineering-questions/computer-knowledge-bank-exam/1-78801/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Computer',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/engineering-questions/online-computer-test/1-78807/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Computer',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/engineering-questions/basic-computer-questions-pdf/1-78813/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Computer',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/model-questions/1-625/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Chemistry',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/tnpsc-model-questions/chemistry-gk-questions/1-627/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Chemistry',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/chemistry-mcq-questions/1-628/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Chemistry',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/tnpsc-model-questions/chemistry-objective-questions/1-629/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Chemistry',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/chemistry-online-test/1-76988/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Chemistry',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/group1-questions/1-77147/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Chemistry',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/group2-questions/1-77148/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Chemistry',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/tnpsc-model-questions/group4-questions/1-77149/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'Chemistry',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))

      var url2 = 'https://meritnotes.com/gk-questions/ias-quiz-questions/1-7214/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'History',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/gk-questions/ias-gk-questions/1-7215/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'History',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          
      }).catch(err => console.log(err))


      var url2 = 'https://meritnotes.com/gk-questions/ias-online-test/1-7216/'
      axios(url2)
      .then(response => {
          let html = response.data
          let $ = cheerio.load(html)
          let questions = []
          var i;
          
          $('.ans_hd_bk', html).each(function () { 
              const title = $(this).text()
              let option1=$(this).next().text();
              option1=option1.split(" ").slice(1).toString().replace(/,/g,' ');
              let option2=$(this).next().next().text();
              option2=option2.split(" ").slice(1).toString().replace(/,/g,' ');
              let option3=$(this).next().next().next().text();
              option3=option3.split(" ").slice(1).toString().replace(/,/g,' ');
              let option4=$(this).next().next().next().next().text();
              option4=option4.split(" ").slice(1).toString().replace(/,/g,' ');
              let answer=$(this).next().next().next().next().next().next().text();
              answer = JSON.stringify(answer).replace(/\\n/g, '').replace(/\\t/g, '').replace(/\"/g, '').slice(0, 6)
              .split("").pop();
              if(answer=='A'){
                answer=option1;
              }
              else if(answer=='B'){
                answer=option2;
              }
              else if(answer=='C'){
                answer=option3;
              }
              else{
                answer=option4;
              }


              questions.push({
                  title,
                  option1,
                  option2,
                  option3,
                  option4,
                  answer
              })
          })
         for(let i = 0; i < questions.length; i++){
          let options=[questions[i].option1,questions[i].option2,questions[i].option3,questions[i].option4];
          
            const newquestions = new Questions({
              category: 'History',
              question: questions[i].title,
              options: options,
              correct_answer: questions[i].answer,
            });
            newquestions.save(function(err,result){
              if (err){
                  console.log(err);
              }
              else{
                  console.log(result)
              }
            })
          }
          
          
          res.json("Success");
      }).catch(err => console.log(err))
      
})
app.get('/viewquestion', async (req, res) => {

  const rndInt = Math.floor(Math.random() * 2) + 10
  const questions = await Questions.aggregate([
    {
      $sample: {
        size: rndInt,
      }
    }
  ])
  res.json(questions);
})

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/user", userRouter);
app.use("/job", jobRouter);
app.use("/test", testRouter);
app.use("/file", fileRouter);
app.use("/pdf", pdfController);
app.use("/video", videoRouter);
app.use("/paper", paperRouter);
app.use("/reply", replyRouter);
app.use("/discussion", discussionRouter);
app.use("/questions", questionsRouter);
app.use("/results", resultsRouter);
app.use("/call", callLogRouter);
app.use("/university", universityRouter);
app.use("/academics", academicsRouter);

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, userId, from, name }) => {
    io.to(userToCall).emit("callUser", {
      signal: signalData,
      userId: userId,
      from,
      name,
    });
  }); //in this userToCall is the id of the user who we want to call

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", {
      signal: data.signal,
      name: data.name,
      userId: data.userId,
    });
  });
});

const url =
  "mongodb+srv://hawg_devs:dev123@devscluster.ks4rryd.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb://localhost:27017";
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.log("Connected to Database");
});

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
