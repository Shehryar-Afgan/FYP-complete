import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";

// components
import TestStandings from "../gat/TestStandings";
import Result from "../gat/Result";
import ChatBot from "../chat/Chat";
import TestMainPage from "../gat/TestMainPage";

const Modules = () => {
  const [selectedTab, setSelectedTab] = useState("Aptitude Test");

  const changeSelectedTab = (e) => {
    setSelectedTab(e.target.innerHTML);
  };

  const tabs = [
    {
      placeholder: "Aptitude Test",
      className: `nav-link ${selectedTab === "Aptitude Test" ? "active" : ""}`,
      id: "ex1-tab-1",
      "data-mdb-toggle": "tab",
      href: "#ex1-tabs-1",
      role: "tab",
      "aria-controls": "ex1-tabs-1",
      "aria-selected": "true",
      onClick: (e) => {
        changeSelectedTab(e);
      },
    },
    {
      placeholder: "Test Results",
      className: `nav-link ${selectedTab === "Test Results" ? "active" : ""}`,
      "data-mdb-toggle": "tab",
      role: "tab",
      onClick: (e) => {
        changeSelectedTab(e);
      },
    },
    {
      placeholder: "Test Standings",
      className: `nav-link ${selectedTab === "Test Standings" ? "active" : ""}`,
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
          <Sidebar />
        </div>
        <div className='col mt-5'>
          <div className='container'>
            <div className='d-flex flex-column align-items-center'>
              <h1>Aptitude test</h1>
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
                  {selectedTab === "Aptitude Test" ? (
                    <TestMainPage />
                  ) : selectedTab === "Test Results" ? (
                    <Result />
                  ) : (
                    <TestStandings />
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
