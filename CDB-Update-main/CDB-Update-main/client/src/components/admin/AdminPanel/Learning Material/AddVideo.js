import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function AddVideo() {
  const [video, setVideo] = React.useState();
  const [name, setName] = React.useState();

  const history = useHistory();
  const sendFiles = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/video/uploadVideos', { video });
      alert(res.data);
      history.push('/');
    } catch (error) {}
  };
  return (
    <div>
      <form action='' onSubmit={sendFiles}>
        <div className='mb-3 mt-5'>
          <p style={{ fontSize: 30, textAlign: 'center' }}>Upload Video</p>
          <label for='formFile' className='form-label'>
            Upload Video Lecture
          </label>
          <input
            className='form-control'
            type='text'
            id='formFile'
            name='text'
            placeholder='Enter Video URL'
            onChange={(e) => {
              setVideo(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='formFile' className='form-label'>
            Video Lecture Name
          </label>
          <input
            className='form-control'
            type='text'
            id='formFile'
            placeholder='Enter Video Name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button
          className='btn btn-success'
          type='submit'
          style={{ float: 'right' }}
        >
          Upload Video
        </button>
      </form>
    </div>
  );
}
