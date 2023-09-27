import React from "react";
import Sidebar from "../../../user/Navbar/Sidebar";
import ViewJobs from "./ViewJobs";
import EmployerSidebar from "../../../user/Navbar/EmployerSidebar";
import { useSelector } from "react-redux";

export default function ViewJobMain() {
  const { user } = useSelector((state) => state.authReducer);
  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 p-0 m-0' style={{ height: "100vh" }}>
          {user.role === 0 ? <Sidebar /> : <EmployerSidebar />}
        </div>
        <div className='col-9'>
          <ViewJobs />
        </div>
      </div>
    </div>
  );
}
