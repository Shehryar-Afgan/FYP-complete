import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import DiscussionDetail from './DiscussionDetail'

export default function DiscussionDetailMain() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <Sidebar />
        </div>
        <div className="col-9">
            <DiscussionDetail />
        </div>
      </div>
      </div>
  )
}
