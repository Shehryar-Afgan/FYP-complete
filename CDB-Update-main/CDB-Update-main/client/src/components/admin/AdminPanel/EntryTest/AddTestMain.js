import React from 'react'
import AdminSidebar from '../../../user/Navbar/AdminSidebar'
import AddTest from './AddTest'

export default function AddTestMain() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <AdminSidebar />
        </div>
        <div className="col-9">
            <AddTest />
        </div>
      </div>
    </div>
  )
}
