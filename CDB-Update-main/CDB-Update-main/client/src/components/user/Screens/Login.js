// import React, { useState } from "react";
// import "./login.css";
// import { Link, Redirect } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../../redux/actions/authAction";

// export default function Login() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.authReducer);
//   const { isLogged } = auth;

//   if (isLogged) {
//     return <Redirect to='/' />;
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(
//         login({
//           email: email,
//           password: password,
//         })
//       );
//     } catch (error) {}
//   };

//   return (
//     <div className='login'>
//       <div className='container d-flex justify-content-center align-items-center'>
//         <div className='w-50 loginContainer'>
//           <form onSubmit={handleSubmit}>
//             <p className='text-center loginText'>Login</p>
//             <div className='mb-3 mt-3'>
//               <label htmlFor='exampleFormControlInput1' className='form-label'>
//                 Email address
//               </label>
//               <input
//                 type='email'
//                 className='form-control'
//                 id='exampleFormControlInput1'
//                 placeholder='Enter Email Address'
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />
//             </div>
//             <div className='mb-3 mt-3'>
//               <label htmlFor='exampleFormControlInput1' className='form-label'>
//                 Password
//               </label>
//               <input
//                 type='password'
//                 className='form-control'
//                 id='exampleFormControlInput1'
//                 placeholder='Enter Password'
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </div>
//             <Link to='/forgot' style={{ textDecoration: "none" }}>
//               <div className='mb-3 mt-3'>
//                 <p className='text-right'>Forgot Password?</p>
//               </div>
//             </Link>
//             <div className='mb-3 mt-3 text-center'>
//               <button className='btn btn-success loginButton' type='submit'>
//                 Login
//               </button>
//             </div>
//             <Link to='/signup' style={{ textDecoration: "none" }}>
//               <div className='mb-3 mt-3 text-center'>
//                 <p>Don't have an account? Sign Up</p>
//               </div>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import * as Components from './Components';
import './styles.css';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../../../redux/actions/authAction';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const [name, setName] = React.useState();
  const [email2, setEmail2] = React.useState();
  const [password2, setPassword2] = React.useState();
  const [role, setRole] = React.useState();

  const [signIn, toggle] = React.useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const { isLogged } = auth;

  if (isLogged) {
    return <Redirect to='/' />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        login({
          email: email,
          password: password,
        })
      );
    } catch (error) {}
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        signup({
          name: name,
          email: email2,
          password: password2,
          role: role,
        })
      );
      setName('');
      setEmail2('');
      setPassword2('');
      setRole('');
      // history.push('/login');
    } catch (error) {}
  };
  return (
    <div
      style={{
        background: '#f6f5f7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Montserrat',
        height: '100vh',
        margin: '-20px 0 50px',
      }}
    >
    
      <Components.Container >
        <Components.SignUpContainer signinIn={signIn} >
          <Components.Form onSubmit={handleSignUpSubmit} >
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Components.Input
              type='email'
              placeholder='Email'
              value={email2}
              onChange={(e) => {
                setEmail2(e.target.value);
              }}
            />
            <Components.Input
              value={password2}
              type='password'
              placeholder='Password'
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                style={{ width: '200px' }}
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {role === 0
                  ? 'Student'
                  : role === 1
                  ? 'Admin'
                  : role === 2
                  ? 'Employer'
                  : 'Select Field'}
              </button>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a
                    className='dropdown-item'
                    href='#!'
                    onClick={() => {
                      setRole(0);
                    }}
                  >
                    Student
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#!'
                    onClick={() => {
                      setRole(1);
                    }}
                  >
                    Admin
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#!'
                    onClick={() => {
                      setRole(2);
                    }}
                  >
                    Employer
                  </a>
                </li>
              </ul>
            </div>

            <Components.Button type='submit'>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmit}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type='email'
              placeholder='Email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Components.Input
              type='password'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <Components.Anchor href='#'>Forgot your password?</Components.Anchor> */}
            <Link to='/forgot' style={{ textDecoration: 'none' }}>
              <div className='mb-3 mt-3'>
                <p className='text-right'>Forgot Password?</p>
              </div>
            </Link>
            <Components.Button>Sigin In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn} >
          <Components.Overlay signinIn={signIn} style={{backgroundColor:'#861dd1'}}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Career Development Portal</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Login;
