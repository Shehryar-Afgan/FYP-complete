import React from 'react';
import Dashboard from './admin/AdminPanel/Dashboard';
import Sidebar from './user/Navbar/Sidebar';

export default function UserDashboard() {
  return (
    <div>
      <div className='row p-0 m-0'>
        <div
          className='col p-0 m-0'
          style={{ height: '100vh', maxWidth: '300px' }}
        >
          <Sidebar />
        </div>
        <div className='col p-0' style={{ marginLeft: 'auto' }}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
