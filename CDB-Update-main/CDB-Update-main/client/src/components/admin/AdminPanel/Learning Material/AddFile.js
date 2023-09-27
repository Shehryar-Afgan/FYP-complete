import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddFile() {
  const [pdf, setPdf] = React.useState();
  const [disabled, setDisabled] = React.useState(false);

  const history = useHistory();
  const sendFiles = async (e) => {
    e.preventDefault();
    try {
      setDisabled(true);
      const res = await axios.post(
        "/pdf/uploadFiles",
        { pdf },
        {
          headers: { "Content-Type": "multipart/form-data", method: "POST" },
        }
      );
      setDisabled(false);
      alert(res.data);
      history.push("/");
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={sendFiles}>
        <div className='mb-3 mt-5'>
          <p style={{ fontSize: 30, textAlign: "center" }}>Upload File</p>
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
