import React, { useEffect, useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { loadEnglishQuestions } from "../../../redux/actions/testAction";
import { addResult } from "../../../redux/actions/resultAction";
import { useHistory } from "react-router-dom";

const TestEnglish = () => {
  const dispatch = useDispatch();
  const { questionData } = useSelector((state) => {
    return state.testReducer;
  });
  const { token } = useSelector((state) => state.authReducer);
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [obtained, setObtained] = useState(0);
  const [answers, setAnswer] = useState({});
  const [finished, setFinished] = useState(false);
  const [timer, setTimer] = useState({
    min: 15,
    sec: 0,
  });

  useEffect(() => {
    (async () => {
      if (token) {
        await dispatch(loadEnglishQuestions(token));
      }
      setLoading(false);
    })();
  }, [dispatch, token]);

  useEffect(() => {
    if (!finished && !loading)
      setTimeout(() => {
        if (timer.sec === 0) {
          if (timer.min === 0) {
            setFinished(true);
          } else {
            setTimer({ min: timer.min - 1, sec: 59 });
          }
        } else {
          setTimer({ ...timer, sec: timer.sec - 1 });
        }
      }, 1000);
  }, [timer, finished, loading]);

  const submitTest = () => {
    if (questionData.length > 0) {
      setFinished(true);
      let obtainedMarks = 0;
      const categoryWiseMarks =
        questionData
          .map((data) => {
            return {
              categoryType: data.category,
              marks: 0,
            };
          })
          // remove duplicates
          .filter(
            (value, index, self) =>
              index ===
              self.findIndex((t) => t.categoryType === value.categoryType)
          ) || [];
      questionData.forEach((question) => {
        const categoryObj = categoryWiseMarks.find((x) => {
          return x.categoryType === question.category;
        });
        if (
          answers[question._id]
            .toLowerCase()
            .includes(question.correct_answer.toLowerCase()) ||
          question.correct_answer
            .toLowerCase()
            .includes(answers[question._id].toLowerCase())
        ) {
          categoryObj.marks += 1;
          obtainedMarks += 1;
        }
      });
      dispatch(
        addResult(
          {
            total: questionData.length,
            obtained: obtainedMarks,
            category: categoryWiseMarks,
          },
          token
        )
      );
      setObtained(obtainedMarks);
      history.push("/modules");
    }
  };

  const setValue = (e) => {
    setAnswer({ ...answers, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 p-0 m-0' style={{ minHeight: "100vh" }}>
          <Sidebar />
        </div>
        <div className='col-8 m-5'>
          {loading ? (
            <div className='d-flex justify-content-center'>
              <div className='spinner-border' role='status'>
                <span className='sr-only'></span>
              </div>
            </div>
          ) : (
            <div className='container'>
              <div className='d-flex justify-content-center'>
                <h3>Aptitude Test</h3>
              </div>
              <div className='d-flex justify-content-center'>
                <h3>
                  {timer.min < 10 ? `0${timer.min}` : timer.min}:
                  {timer.sec < 10 ? `0${timer.sec}` : timer.sec}
                </h3>
              </div>
              <div className='d-flex justify-content-evenly'>
                <h3>obtained : {obtained}</h3>
                <h3>total : {questionData.length}</h3>
              </div>

              <div className='overflow-auto' style={{ maxHeight: 350 }}>
                {questionData.map((item, idx) => (
                  <div key={idx.toString()}>
                    <h5>
                      {idx + 1}. {item.question}
                    </h5>
                    <div className='container'>
                      {item.options.map((option, id) => (
                        <div className='m-1' key={`options-${id}-${option}`}>
                          <input
                            id={option}
                            type='radio'
                            name={item._id}
                            disabled={finished}
                            value={option}
                            onChange={setValue}
                            className='mx-2'
                          />
                          <label htmlFor={option}>{option}</label>
                          {finished &&
                          answers &&
                          answers[item._id] === option ? (
                            answers[item._id]
                              .toLowerCase()
                              .includes(item.correct_answer.toLowerCase()) ||
                            item.correct_answer
                              .toLowerCase()
                              .includes(answers[item._id].toLowerCase()) ? (
                              <FontAwesomeIcon
                                className='text-success mx-2'
                                icon={faCheck}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className='text-danger mx-2'
                                icon={faX}
                              />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className='d-flex justify-content-center'>
                <button
                  disabled={finished}
                  className='btn btn-success mt-3 px-5'
                  onClick={() => submitTest()}
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestEnglish;
