import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddPaper() {
  const [pdf, setPdf] = React.useState();
  const [year, setYear] = React.useState();
  const [university, setUniversity] = React.useState();

  const history = useHistory();
  const sendFiles = async (e) => {
    e.preventDefault();
    try {
      if (pdf && year && university) {
        const res = await axios.post(
          "/paper/addPaper",
          {
            university,
            year,
            pdf,
          },
          {
            headers: { "Content-Type": "multipart/form-data", method: "POST" },
          }
        );
        alert(res.data);
        history.push("/");
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={sendFiles}>
        <div className='mb-3 mt-5'>
          <p style={{ textAlign: "center", fontSize: 30, marginBottom: 10 }}>
            Add paper
          </p>
          <label for='formFile' className='form-label'>
            Enter University Name
          </label>
          <input
            className='form-control'
            type='text'
            id='formFile'
            name='file'
            onChange={(e) => {
              setUniversity(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='formFile' className='form-label'>
            Enter year
          </label>
          <input
            className='form-control'
            type='text'
            id='formFile'
            name='file'
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='formFile' className='form-label'>
            Upload PDF File
          </label>
          <input
            className='form-control'
            type='file'
            accept='.pdf'
            id='formFile'
            name='file'
            onChange={(e) => {
              setPdf(e.target.files[0]);
            }}
          />
        </div>
        <button
          className='btn btn-success'
          type='submit'
          style={{ float: "right" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
