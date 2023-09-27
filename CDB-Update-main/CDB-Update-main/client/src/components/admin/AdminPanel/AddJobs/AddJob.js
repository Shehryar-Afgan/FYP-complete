import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import JobImage from '../../../../assets/imgs/jobs-image.png';

export default function AddJob() {
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [location, setLocation] = React.useState();
  const [experience, setExperience] = React.useState();
  const { token } = useSelector((state) => state.authReducer);
  const userToken = token || localStorage.getItem('token');

  const addJob = async (e) => {
    e.preventDefault();
    try {
      if (title && description && location && experience && token) {
        const res = await axios.post(
          '/job/addJob',
          {
            title,
            description,
            location,
            experience,
          },
          {
            headers: { authorization: `Bearer ${userToken}` },
          }
        );

        toast.success('Job added successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      } else {
        toast.error('Provide all fields to add a job!', {
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
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <div>
        <form
          action=''
          className='p-5 border mt-5'
          style={{ minWidth: '400px' }}
          onSubmit={addJob}
        >
          <p className='text-center'>
            <b>Add Jobs</b>
          </p>
          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Job Title
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Developer'
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Job Description
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='We are hiring...'
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Job Location
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Islamabad'
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Experience Required
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='2 years'
              onChange={(e) => {
                setExperience(e.target.value);
              }}
            />
          </div>
          <button
            className='btn btn-primary mt-3 mb-3'
            style={{ float: 'right', marginBottom: 10 }}
          >
            Add Job
          </button>
        </form>
      </div>
      <div>
        <img src={JobImage} style={{ width: '400px' }} alt='Jobs' />
      </div>
    </div>
  );
}
