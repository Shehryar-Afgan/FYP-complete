import React from "react";
import ApplicantsDetails from "./ApplicantsDetails";
import EmployerSidebar from "../../../user/Navbar/EmployerSidebar";

export default function ApplicantDetailsMain() {
  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 p-0 m-0' style={{ height: "100vh" }}>
          {/* <AdminSidebar /> */}
          <EmployerSidebar />
        </div>
        <div className='col-9'>
          <ApplicantsDetails />
        </div>
      </div>
    </div>
  );
}
