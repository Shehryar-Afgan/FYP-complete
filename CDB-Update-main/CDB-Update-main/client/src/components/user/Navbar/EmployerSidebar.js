import React,{useState} from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const handleLogout = async () => {
  try {
    await axios.get('/user/logout');
    localStorage.removeItem('token');
    localStorage.removeItem('firstLogin');
    window.location.href = '/login';
  } catch (error) {
    window.location.href = '/';
  }
};
export default function EmployerSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <nav
      id='sidebarMenu'
      className={`d-lg-block sidebar ${sidebarOpen ? "open" : ""}`}
      style={{ backgroundColor: '#861dd1' }}
    >
      <div className='position-sticky'>
        <div className='list-group list-group-flush mx-3 mt-4'>
        <div className="toggle" onClick={toggleSidebar}>
            <i className={`fas ${sidebarOpen ? "fa-bars" : "fa-times"}`}></i>
          </div>
          {!sidebarOpen && <Link className='list-group-item list-group-item-action py-2 ripple text-black fw-bold'>
            Employer Dashboard
          </Link>}
          
          <Link
            to='/addJob'
            className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
          >
            <i className='fas fa-solid fa-cube text-white me-3'></i>
            {!sidebarOpen && <span className="text-white">Add Jobs</span>}
          </Link>
          <Link
            to='/viewJobs'
            className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
          >
            <i className='fas fa-solid fa-clipboard-list me-3 text-white'></i>
            {!sidebarOpen && <span className="text-white">Job Listing</span>}
          </Link>
          <Link
            to='/viewApplicants'
            className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
          >
            <i className='fas fa-regular fa-copy text-white me-3'></i>
            {!sidebarOpen && <span className="text-white">View Applicants</span>}
          </Link>
          <Link
            to='/calls'
            className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
          >
            <i className='fas fa-regular fa-copy text-white me-3'></i>
            {!sidebarOpen && <span className="text-white">Calls</span>}
          </Link>
          <Link
            to='/profile'
            className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
          >
            <i className='fas fa-solid fa-book text-white me-3'></i>
            {!sidebarOpen && <span className="text-white">Profile</span>}
          </Link>
          <Link
            to='#!'
            onClick={handleLogout}
            className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
          >
            <i className='fas fa-solid fa-right-from-bracket text-white'></i>
            {!sidebarOpen && <span className="text-white">Logout</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
