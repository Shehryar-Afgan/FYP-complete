import ACTIONS from './index';
import axios from 'axios';
import { toast } from 'react-toastify';

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const res = await axios.post('/user/login', { email, password }, config);
      if (res.data.token) {
        localStorage.setItem('token', res.data.token.toString());
        dispatch({
          type: ACTIONS.LOGIN_SUCCESS,
          payload: {
            token: res.data.token,
          },
        });
        dispatch(fetchUser({ token: res.data.token }));
      } else {
        toast.warning('Invalid credentials, please try again!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        throw new Error('login failed');
      }
    } catch (e) {
      dispatch({
        type: ACTIONS.LOGIN_FAILURE,
      });
    }
  };

export const signup =
  ({ name, email, password, role }) =>
  async (dispatch) => {
    try {
      const res = await axios.post('/user/register', {
        name,
        email,
        password,
        role,
      }, config);
      if (res.data) {
        dispatch({
          type: ACTIONS.REGISTER_SUCCESS,
        });
        toast.success('Registration successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        return true;
      }
      toast.warning('Sign up failed, please try again!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      throw new Error('registration failed');
    } catch (e) {
      dispatch({
        type: ACTIONS.REGISTER_FAILURE,
      });
      return false;
    }
  };

export const fetchUser =
  ({ token }) =>
  async (dispatch) => {
    try {
      const userToken = token || localStorage.getItem('token');
      if (userToken) {
        const res = await axios.get('/user/info', {
          headers: { authorization: `Bearer ${userToken}` },
        });
        dispatch({
          type: ACTIONS.FETCH_USER_SUCCESS,
          payload: {
            ...res.data,
            token: userToken,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: ACTIONS.FETCH_USER_FAILURE,
      });
    }
  };
