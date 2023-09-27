import React from 'react';
import './signup.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [role, setRole] = React.useState();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/register', {
        name,
        email,
        password,
        role,
      });
      console.lof(res.data);
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
      // history.push('/login');
    } catch (error) {}
  };
  return (
    <div className='login'>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='w-50 signupContainer'>
          <form onSubmit={handleSubmit}>
            <p className='text-center loginText'>Sign Up</p>
            <div className='mb-3 mt-3'>
              <label for='exampleFormControlInput1' className='form-label'>
                Full Name
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Enter Full Name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className='mb-3 mt-3'>
              <label for='exampleFormControlInput1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Enter Email Address'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='mb-3 mt-3'>
              <label for='exampleFormControlInput1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Enter Password'
              />
            </div>
            <div className='mb-3 mt-3'>
              <label for='exampleFormControlInput1' className='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Confirm Password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className='mb-3 mt-3'>
              <label for='exampleFormControlInput1' className='form-label'>
                Role
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='O For Student, 1 For Admin, 2 For Employer'
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </div>

            <div className='mb-3 mt-3 text-center'>
              <button className='btn btn-success loginButton' type='submit'>
                Sign Up
              </button>
            </div>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <div className='mb-3 mt-3 text-center'>
                <p>Already have an account? Sign In</p>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
