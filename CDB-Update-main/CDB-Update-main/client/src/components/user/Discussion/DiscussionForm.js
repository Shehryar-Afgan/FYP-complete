import React from 'react';
import axios from 'axios';
import Discussion from '../../../assets/imgs/discussion.jpg';
import { toast } from 'react-toastify';

export default function DiscussionForm() {
  const [response, setResponse] = React.useState();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/discussion/addQuery', { query: response });
      if (res.data) {
        toast.success('You question has been posted to discussion forums', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } catch (error) {}
  };
  return (
    <div
      className='container'
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <p className='mt-5 text-center mb-3 fw-bold' style={{ fontSize: 30 }}>
        Discussion Form
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <img src={Discussion} style={{ width: '600px' }} alt='Discussion' />
        <form
          action=''
          onSubmit={sendData}
          style={{ minWidth: '300px', marginLeft: '20px' }}
        >
          <div className='mb-3 justify-content-center'>
            <label for='exampleFormControlInput1' className='form-label'>
              Enter Query
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='What is react?'
              onChange={(e) => {
                setResponse(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <button className='btn btn-success' type='submit'>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
