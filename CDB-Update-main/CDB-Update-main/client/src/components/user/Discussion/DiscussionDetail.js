import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function DiscussionDetail() {
  const [response, setResponse] = React.useState();
  const location = useLocation();
  const discussion = location.state;
  console.log(discussion);

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/discussion/addResponse/${discussion._id}`,
        { response: response }
      );
      alert(res.data);
    } catch (error) {}
  };
  return (
    <div
      className='container'
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <p className='mt-5 text-center mb-3 fw-bold' style={{ fontSize: 30 }}>
        Response Form
      </p>
      <form action='' onSubmit={sendData}>
        <div className='mb-3 w-50 justify-content-center'>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter Response
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            onChange={(e) => {
              setResponse(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <button className='btn btn-success' type='submit'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
