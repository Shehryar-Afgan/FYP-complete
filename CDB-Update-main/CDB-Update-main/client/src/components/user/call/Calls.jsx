import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import EmployeeSidebar from "../Navbar/EmployerSidebar";

// components
import VideoCall from "../call/VideoCall";
import AudioCall from "../call/AudioCall";
import CallLog from "../callLog/UserCallLog";
import { useSelector } from "react-redux";

const Modules = () => {
  const [selectedTab, setSelectedTab] = useState("Call Logs");
  const { user } = useSelector((state) => state.authReducer);

  const changeSelectedTab = (e) => {
    setSelectedTab(e.target.innerHTML);
  };

  const tabs = [
    {
      placeholder: "Call Logs",
      className: `nav-link ${selectedTab === "Call Logs" ? "active" : ""}`,
      "data-mdb-toggle": "tab",
      role: "tab",
      onClick: (e) => {
        changeSelectedTab(e);
      },
    },
    {
      placeholder: "Video Call",
      className: `nav-link ${selectedTab === "Video Call" ? "active" : ""}`,
      "data-mdb-toggle": "tab",
      role: "tab",
      onClick: (e) => {
        changeSelectedTab(e);
      },
    },
    {
      placeholder: "Audio Call",
      className: `nav-link ${selectedTab === "Audio Call" ? "active" : ""}`,
      "data-mdb-toggle": "tab",
      role: "tab",
      onClick: (e) => {
        changeSelectedTab(e);
      },
    },
  ];

  console.log(selectedTab);

  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 m-0 me-5 p-0' style={{ minHeight: "100vh" }}>
          {user.role === 0 ? <Sidebar /> : <EmployeeSidebar />}
        </div>
        <div className='col mt-5'>
          <div className='container'>
            <div className='d-flex flex-column align-items-center'>
              <h1>Calls</h1>
              <ul
                className='nav nav-tabs mb-3 nav-fill'
                id='ex1'
                role='tablist'
              >
                {tabs.map((x) => {
                  return <li {...x}>{x.placeholder}</li>;
                })}
              </ul>

              <div className='tab-content' id='ex1-content'>
                <div
                  className='tab-pane fade show active'
                  role='tabpanel'
                  aria-labelledby='ex1-tab-1'
                >
                  {selectedTab === "Call Logs" ? (
                    <CallLog />
                  ) : selectedTab === "Video Call" ? (
                    <VideoCall />
                  ) : (
                    <AudioCall />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
