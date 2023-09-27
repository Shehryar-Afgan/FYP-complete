import React from 'react';
import Sidebar from '../../../user/Navbar/Sidebar';
import AdminSidebar from '../../../user/Navbar/AdminSidebar';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VideoLectures from '../../../../assets/imgs/video-lecturer.jpg';
import Notes from '../../../../assets/imgs/notes.jpg';

export default function ViewMaterialMain() {
  const history = useHistory();
  const { isAdmin } = useSelector((state) => state.authReducer);
  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 p-0 m-0' style={{ height: '100vh' }}>
          {isAdmin ? <AdminSidebar /> : <Sidebar />}
        </div>
        <div className='col-9'>
          <p style={{ marginTop: 20, fontSize: 30, textAlign: 'center' }}>
            <b>View Material</b>
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <img
              src={VideoLectures}
              style={{ width: '500px' }}
              alt='Video lectures'
            />
            <button
              className='btn btn-success'
              style={{ maxHeight: '50px' }}
              onClick={() => {
                history.push('/viewVideo');
              }}
            >
              View Videos
            </button>
          </div>
          <br />
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <button
              className='btn btn-success'
              style={{ maxHeight: '50px' }}
              onClick={() => {
                history.push('/viewFile');
              }}
            >
              View Files
            </button>
            <img src={Notes} style={{ width: '500px' }} alt='Notes' />
          </div>
        </div>
      </div>
    </div>
  );
}
