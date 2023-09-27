import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../user/Navbar/AdminSidebar";
import "../../../../assets/css/UploadQuestions.css";
import {
  addQuestionsBulkRequest,
  addSingleQuestion,
} from "../../../../redux/actions/testAction";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  question: "",
  category: "",
  options: [],
  correctAnswer: "",
};
export default function AddJobMain() {
  const [questions, setQuestions] = useState("");
  const { token } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  const [option, setOption] = useState("");
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const uploadInput = document.getElementById("chooseFile");
    const fileUploadContainer = document.getElementsByClassName("file-upload");
    const noFileLabel = document.getElementById("noFile");

    if (uploadInput) {
      uploadInput.addEventListener("change", (e) => {
        if (/^\s*$/.test(e.target.value)) {
          if (fileUploadContainer) {
            fileUploadContainer[0].classList.remove("active");
          }
          if (noFileLabel) {
            noFileLabel.innerText = "No File Selected...";
          }
        } else {
          const reader = new FileReader();
          reader.onload = function fileReadCompleted() {
            setQuestions(reader.result);
          };
          reader.readAsText(uploadInput.files[0], "UTF-8");
          if (fileUploadContainer) {
            fileUploadContainer[0].classList.add("active");
          }
          if (noFileLabel) {
            noFileLabel.innerText = e.target.value.replace(
              "C:\\fakepath\\",
              ""
            );
          }
        }
      });
    }
  }, []);

  const AddTestQuestion = () => {
    if (questions.length > 0) {
      dispatch(addQuestionsBulkRequest(JSON.parse(questions), token));
    }
  };
  const submitQuestion = () => {
    dispatch(addSingleQuestion(formData, token));
    setFormData(initialState);
    alert("Question Added successfully");
  };

  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{ height: "100vh" }}>
          <AdminSidebar />
        </div>
        <div className="file-upload-container col-9 mt-5">
          <h4>Upload Single Questions</h4>
          <div className="file-upload col-9">
            <input
              type="text"
              name="question"
              value={formData.question}
              className="form-control mb-2"
              placeholder="Add Question"
              onChange={changeHandler}
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              className="form-control mb-2"
              placeholder="Add Category"
              onChange={changeHandler}
            />
            <input
              type="text"
              name="options"
              value={option}
              className="form-control mb-2"
              placeholder="Option"
              onChange={(e) => setOption(e.target.value)}
            />
            <button
              className="btn btn-primary mb-2"
              onClick={(e) => {
                setFormData({
                  ...formData,
                  options: [...formData.options, option],
                });
                alert(option + " added in options");
                setOption("");
              }}
            >
              Add Option
            </button>
            <input
              type="text"
              name="correctAnswer"
              value={formData.correctAnswer}
              className="form-control mb-2"
              placeholder="Correct Answer"
              onChange={changeHandler}
            />
            <button className="btn btn-primary mb-2" onClick={submitQuestion}>
              Upload Question
            </button>
          </div>
          <hr />
          <h4>Upload Multiple Questions</h4>
          <div className="file-upload col-9">
            <div className="file-select">
              <div className="file-select-button" id="fileName">
                Choose File
              </div>
              <div className="file-select-name" id="noFile">
                Select JSON file...
              </div>
              <input
                type="file"
                name="chooseFile"
                id="chooseFile"
                accept=".json"
              />
            </div>
            <button onClick={() => AddTestQuestion()}>Save</button>
          </div>
          <div className="questions-sample code-sample mt-3 p-2">
            <code>
              [&#123;
              <br />
              &nbsp;&nbsp;question: "Sample Question",
              <br />
              &nbsp;&nbsp;category: "Question Category",
              <br />
              &nbsp;&nbsp;options: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"Option A",
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;"Option B",
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;"Option C",
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;"Option D",
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;correct_answer: "Option A",
              <br />
              &#125;]
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
