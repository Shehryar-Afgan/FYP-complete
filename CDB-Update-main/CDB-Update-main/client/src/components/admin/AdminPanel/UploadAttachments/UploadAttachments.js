import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../../../user/Navbar/Sidebar";
import { useParams } from "react-router-dom";

export default function UploadAttachments() {
  const [cv, setCv] = React.useState();
  const [matric, setMatric] = React.useState();
  const [fsc, setFsc] = React.useState();
  const [disabled, setDisabled] = React.useState(false);
  const { id } = useParams();

  const auth = useSelector((state) => state.authReducer);
  const { user } = auth;

  const history = useHistory();

  const sendFiles = async (e) => {
    e.preventDefault();
    try {
      if (cv && matric && fsc) {
        setDisabled(true);
        let formData = new FormData();
        formData.append("file", cv);
        formData.append("matric", matric);
        formData.append("fsc", fsc);
        formData.set("name", user.name);
        formData.set("email", user.email);
        formData.set("job_id", id);
        const res = await axios.post("/file/uploadFsc", formData);
        console.log(res.data);
        setDisabled(false);
        alert(res.data);
        history.push("/");
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 m-0 me-5 p-0' style={{ minHeight: "100vh" }}>
          <Sidebar />
        </div>
        <div className='col mt-5 d-flex flex-column justify-content-center align-items-center'>
          <h4>
            <b>Apply for Job</b>
          </h4>
          <form action='' onSubmit={sendFiles} className='w-75'>
            <div className='mb-3'>
              <label for='formFile' className='form-label'>
                Upload CV
              </label>
              <input
                className='form-control'
                type='file'
                id='formFile'
                name='file'
                onChange={(e) => {
                  setCv(e.target.files[0]);
                }}
                accept='.pdf'
              />
            </div>
            <div className='mb-3'>
              <label for='formFile' className='form-label'>
                Upload Fsc Transcript
              </label>
              <input
                className='form-control'
                type='file'
                id='formFile'
                onChange={(e) => {
                  setFsc(e.target.files[0]);
                }}
                accept='.pdf'
              />
            </div>
            <div className='mb-3'>
              <label for='formFile' className='form-label'>
                Upload Matric Transcript
              </label>
              <input
                className='form-control'
                type='file'
                id='formFile'
                onChange={(e) => {
                  setMatric(e.target.files[0]);
                }}
                accept='.pdf'
              />
            </div>
            <button
              className='btn btn-success'
              type='submit'
              style={{ float: "right" }}
              disabled={disabled}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
