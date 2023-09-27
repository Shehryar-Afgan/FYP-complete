import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/actions/authAction";
import Employer from "./components/admin/Employer";
import { Route } from "react-router-dom";
import Login from "./components/user/Screens/Login";
import Signup from "./components/user/Screens/Signup";
import ForgotPassword from "./components/user/Screens/ForgotPassword";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const { isAdmin, user } = auth;

  useEffect(() => {
    try {
      const userToken = auth.token || localStorage.getItem("token");
      if (auth.loading && userToken) {
        dispatch(fetchUser({ token: auth.token }));
      }
    } catch (err) {
      console.log(err);
    }
  }, [auth, dispatch]);

  return (
    <Router>
      <div className='App'>
        <ToastContainer />
        {/* <Login /> */}
        {isAdmin ? <Admin /> : user.role === 2 ? <Employer /> : <User />}
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/forgot' exact component={ForgotPassword} />
      </div>
    </Router>
  );
}
