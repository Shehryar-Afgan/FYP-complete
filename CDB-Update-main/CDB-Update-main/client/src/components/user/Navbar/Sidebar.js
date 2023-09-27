import React,{useState} from 'react';
import '../../../assets/css/Sidebar.css';
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

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
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
          {!sidebarOpen && <Link className="list-group-item list-group-item-action py-2 ripple text-black fw-bold">
          Career Development
          </Link>}
            
            {/* <Link
              to='/new'
              class='list-group-item list-group-item-action py-2 ripple bg-black'
            >
              <i class='fas fa-solid fa-highlighter me-3 text-white'></i>
              <span className='text-white'>Login</span>
            </Link> */}
            <Link
              to='/viewTest'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-highlighter me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>Mock Test</span>}
            </Link>
            <Link
              to='/modules'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-highlighter me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>Aptitude Test</span>}
            </Link>
            <Link
              to='/chatbot'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i class='fa fa-regular fa-comments me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>ChatBot</span>}
            </Link>
            <Link
              to='/academics'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-regular fa-bookmark me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>1 Stop Recommendation</span>}
            </Link>
            <Link
              to='/university-recommendation'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-school text-white me-2'></i>
              {!sidebarOpen && <span className='text-white'>University Recommendation</span>}
            </Link>
            <Link
              to='/calls'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-phone-volume me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>Calls</span>}
            </Link>
            <Link
              to='/viewPaper'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-copy me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>Past Papers</span>}
            </Link>
            <Link
              to='/viewMaterial'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-book-open me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>Learning Materials</span>}
            </Link>
            <Link
              to='/discussion'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i class='fa fa-solid fa-users me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>Discussion Form</span>}
            </Link>
            <Link
              to='/viewDiscussion'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-comments me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>View Discussion</span>}
            </Link>
            <Link
              to='/viewJobs'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-clipboard-list me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>Job Listing</span>}
            </Link>
            <Link
              to='/profile'
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fas fa-solid fa-user me-3 text-white'></i>
              {!sidebarOpen && <span className='text-white'>Profile</span>}
            </Link>
            <Link
              to={'#'}
              onClick={handleLogout}
              className='list-group-item list-group-item-action py-2 ripple sider-link-hover'
            >
              <i className='fa-solid fa-arrow-right-from-bracket text-white'></i>
              {!sidebarOpen && <span className='text-white'>Logout</span>}
              
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
