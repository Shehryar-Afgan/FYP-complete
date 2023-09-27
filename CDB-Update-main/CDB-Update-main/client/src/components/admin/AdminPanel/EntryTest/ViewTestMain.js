import React from 'react'
import Sidebar from '../../../user/Navbar/Sidebar'
import ViewTest from './ViewTest'
import { useLocation } from 'react-router-dom'

export default function ViewTestMain() {
  const location = useLocation();
  const university = location.state;
  console.log(university);
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <Sidebar />
        </div>
        <div className="col-9">
            <ViewTest university = {university} />
        </div>
      </div>
      </div>
  )
}
