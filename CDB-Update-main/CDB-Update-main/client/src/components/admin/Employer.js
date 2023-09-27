import React from "react";
import { Switch, Route } from "react-router-dom";
import EmployerDashboard from "./EmployerDashboard";
import ApplicantDetailsMain from "./AdminPanel/ViewApplicants/ApplicantDetailsMain";
import AddJobMain from "./AdminPanel/AddJobs/AddJobMain";
import ViewApplicantMain from "./AdminPanel/ViewApplicants/ViewApplicantMain";
import EmployerProfileMain from "../user/Navbar/EmployerProfileMain";
import ViewJobMain from "./AdminPanel/ViewJobs/ViewJobMain";
import Calls from "../user/call/Calls";

export default function User() {
  return (
    <Switch>
      <Route path='/' exact component={EmployerDashboard} />
      <Route path='/addJob' exact component={AddJobMain} />
      <Route path='/viewApplicants' exact component={ViewApplicantMain} />
      <Route path='/applicantDetails' exact component={ApplicantDetailsMain} />
      <Route path='/profile' exact component={EmployerProfileMain} />
      <Route path='/calls' exact component={Calls} />
      <Route path='/viewJobs' exact component={ViewJobMain} />
    </Switch>
  );
}
