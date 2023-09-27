import React from 'react'
import EmployerSidebar from '../user/Navbar/EmployerSidebar'
import Dashboard from './AdminPanel/Dashboard'

export default function EmployerDashboard() {
  return (
   <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <EmployerSidebar />
        </div>
        <div className="col-9">
            <Dashboard />
        </div>
      </div>
    </div>
  )
}
