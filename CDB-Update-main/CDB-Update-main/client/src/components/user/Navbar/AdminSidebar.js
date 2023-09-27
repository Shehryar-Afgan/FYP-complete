import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";

const handleLogout = async () => {
  try {
    await axios.get("/user/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("firstLogin");
    window.location.href = "/login";
  } catch (error) {
    window.location.href = "/";
  }
};

export default function AdminSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav
      id="sidebarMenu"
      className={`d-lg-block sidebar ${sidebarOpen ? "open" : ""}`}
      style={{ backgroundColor: '#861dd1' }}
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <div className="toggle" onClick={toggleSidebar}>
            <i className={`fas ${sidebarOpen ? "fa-bars" : "fa-times"}`}></i>
          </div>
          {!sidebarOpen && <Link className="list-group-item list-group-item-action py-2 ripple text-black fw-bold">
            Admin Dashboard
          </Link>}
          
          <Link
            to="/addTest"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-solid fa-cube me-3 text-white"></i>
            {!sidebarOpen && <span className="text-white">Add Mock Test</span>}
          </Link>
          <Link
            to="/addPaper"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-regular fa-copy text-white me-3"></i>
            {!sidebarOpen && <span className="text-white">Add Past Papers</span>}
          </Link>
          <Link
            to="/addMaterial"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-solid fa-book text-white me-3"></i>
            {!sidebarOpen && <span className="text-white">Add Learning Materials</span>}
          </Link>
          <Link
            to="/add-questions"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-solid fa-question text-white me-3"></i>
            {!sidebarOpen && <span className="text-white">Add Test Questions</span>}
          </Link>
          <Link
            to="/academics"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-regular fa-bookmark me-3 text-white"></i>
            {!sidebarOpen && <span className="text-white">1 Stop Recommendation</span>}
          </Link>
          <Link
            to="/viewPaper"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-solid fa-copy me-3 text-white"></i>
            {!sidebarOpen && <span className="text-white">Past Papers</span>}
          </Link>
          <Link
            to="/viewMaterial"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-solid fa-book-open me-3 text-white"></i>
            {!sidebarOpen && <span className="text-white">Learning Materials</span>}
          </Link>
          <Link
            to="/scrapequestions"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-regular fa-user text-white me-3"></i>
            {!sidebarOpen && <span className="text-white">Scrape Questions</span>}
          </Link>
          <Link
            to="/profile"
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-regular fa-user text-white me-3"></i>
            {!sidebarOpen && <span className="text-white">Profile</span>}
          </Link>
          <Link
            to="#!"
            onClick={handleLogout}
            className="list-group-item list-group-item-action py-2 ripple sider-link-hover"
          >
            <i className="fas fa-solid fa-right-from-bracket text-white"></i>
            {!sidebarOpen && <span className="text-white">Logout</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
