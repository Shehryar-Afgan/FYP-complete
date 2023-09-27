import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import DiscussionForm from './DiscussionForm'

export default function AddDiscussionMain() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <Sidebar />
        </div>
        <div className="col-9">
            <DiscussionForm />
        </div>
      </div>
      </div>
  )
}
