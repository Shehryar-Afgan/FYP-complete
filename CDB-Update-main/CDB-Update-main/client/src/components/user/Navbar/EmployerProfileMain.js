import React from 'react'
import Profile from '../Profile'
import EmployerSidebar from './EmployerSidebar'

export default function EmployerProfileMain() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{ height: "100vh" }}>
          <EmployerSidebar />
        </div>
        <div className="col-9">
            <Profile />
        </div>
      </div>
    </div>
  )
}
