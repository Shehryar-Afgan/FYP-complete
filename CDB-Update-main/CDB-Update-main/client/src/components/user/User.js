import React from "react";
import { Switch, Route } from "react-router-dom";
import UploadAttachments from "../admin/AdminPanel/UploadAttachments/UploadAttachments";
import ViewApplicants from "../admin/AdminPanel/ViewApplicants/ViewApplicants";
import ApplicantsDetails from "../admin/AdminPanel/ViewApplicants/ApplicantsDetails";
import AddTest from "../admin/AdminPanel/EntryTest/AddTest";
import ViewTest from "../admin/AdminPanel/EntryTest/ViewTest";
import AddFile from "../admin/AdminPanel/Learning Material/AddFile";
import AddVideo from "../admin/AdminPanel/Learning Material/AddVideo";
import ViewFile from "../admin/AdminPanel/Learning Material/ViewFiles";
import ViewPaperMain from "../admin/AdminPanel/PastPapers/ViewPaperMain";
import ViewMaterialMain from "../admin/AdminPanel/Learning Material/ViewMaterialMain";
import AddPaper from "../admin/AdminPanel/PastPapers/AddPaper";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Navbar/Sidebar";
import AdminSidebar from "./Navbar/AdminSidebar";
import AddJob from "../AdminPanel/AddJob";
import UserDashboard from "../UserDashboard";
import UserProfileMain from "../../components/user/Screens/UserProfileMain";
import ViewFileMain from "../admin/AdminPanel/Learning Material/ViewFileMain";
import ViewVideosMain from "../admin/AdminPanel/Learning Material/ViewVideosMain";
import ViewVideoDetailMain from "../admin/AdminPanel/Learning Material/ViewVideoDetailMain";
import ViewJobMain from "../admin/AdminPanel/ViewJobs/ViewJobMain";
import AddDiscussionMain from "./Discussion/AddDiscussionMain";
import ViewDiscussionMain from "./Discussion/ViewDiscussionMain";
import DiscussionDetailMain from "./Discussion/DiscussionDetailMain";
import ViewTestMainScreen from "../admin/AdminPanel/EntryTest/ViewTestMainScreen";
import TestPage from "./gat/TestPage";
import Modules from "./fyp_modules/Modules.jsx";
import Academics from "./academics/Academics";
import Calls from "./call/Calls";
import ChatBot from "./chat/Chat";
import Recommendation from "./universityRecommendation/Recommendation";

import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TestCategory from "./gat/TestCategory";
import TestEnglish from "./gat/TestEnglish";
import New from "./Screens/New";

export default function User() {
  const { isLogged } = useSelector((state) => state.authReducer);

  if (!isLogged) {
    return <Redirect to='/login' />;
  }

  return (
    <Switch>
      <Route path='/' exact component={UserDashboard} />
      <Route path='/new' exact component={New} />
      <Route path='/admin/AddJob' exact component={AddJob} />
      <Route path='/upload/:id' exact component={UploadAttachments} />
      <Route path='/viewApplicants' exact component={ViewApplicants} />
      <Route path='/applicantDetails' exact component={ApplicantsDetails} />
      <Route path='/addTest' exact component={AddTest} />
      <Route path='/viewTest' exact component={ViewTestMainScreen} />
      <Route path='/viewTests' exact component={ViewTest} />
      <Route path='/addFile' exact component={AddFile} />
      <Route path='/addVideo' exact component={AddVideo} />
      <Route path='/viewVideo' exact component={ViewVideosMain} />
      <Route path='/videoDetail' exact component={ViewVideoDetailMain} />
      <Route path='/viewFile' exact component={ViewFileMain} />
      <Route path='/viewFile' exact component={ViewFile} />
      <Route path='/addPaper' exact component={AddPaper} />
      <Route path='/navbar' exact component={Navbar} />
      <Route path='/sidebar' exact component={Sidebar} />
      <Route path='/admin/sidebar' exact component={AdminSidebar} />
      <Route path='/discussion' exact component={AddDiscussionMain} />
      <Route path='/viewDiscussion' exact component={ViewDiscussionMain} />
      <Route path='/discussionDetail' exact component={DiscussionDetailMain} />
      <Route path='/profile' exact component={UserProfileMain} />
      <Route path='/viewJobs' exact component={ViewJobMain} />
      <Route path='/gat/test' exact component={TestPage} />
      <Route path='/gat/cattest' exact component={TestCategory} />
      <Route path='/gat/englishtest' exact component={TestEnglish} />
      <Route path='/modules' exact component={Modules} />
      <Route path='/academics' exact component={Academics} />
      <Route path='/calls' exact component={Calls} />
      <Route path='/chatbot' exact component={ChatBot} />
      <Route path='/viewPaper' exact component={ViewPaperMain} />
      <Route path='/viewMaterial' exact component={ViewMaterialMain} />
      <Route
        path='/university-recommendation'
        exact
        component={Recommendation}
      />
    </Switch>
  );
}
