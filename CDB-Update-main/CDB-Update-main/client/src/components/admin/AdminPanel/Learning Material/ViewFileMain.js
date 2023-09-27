import React from "react";
import Sidebar from "../../../user/Navbar/Sidebar";
import AdminSidebar from "../../../user/Navbar/AdminSidebar";
import ViewFiles from "./ViewFiles";
import { useSelector } from "react-redux";

export default function ViewFileMain() {
  const { isAdmin } = useSelector((state) => state.authReducer);
  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 p-0 m-0' style={{ height: "100vh" }}>
          {isAdmin ? <AdminSidebar /> : <Sidebar />}
        </div>
        <div className='col-9'>
          <ViewFiles />
        </div>
      </div>
    </div>
  );
}
