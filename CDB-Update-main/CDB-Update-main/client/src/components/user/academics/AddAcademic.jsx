import React, { useState, useEffect } from 'react';
import '../../../assets/css/AddAcademics.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAcademics,
  getAcademics,
  deleteAcademics,
} from '../../../redux/actions/academicsAction';
import '../../../assets/css/Table.css';

function AddAcademic() {
  const [fullName, setFullName] = useState('');
  const [matric, setMatric] = useState('');
  const [school, setSchool] = useState('');
  const [fsc, setFSC] = useState('');
  const [college, setCollege] = useState('');
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authReducer);
  const { academics } = useSelector((state) => state.academicsReducer);

  useEffect(() => {
    dispatch(getAcademics({ token: token }));
  }, []);

  const saveDatatoFirebase = (e) => {
    e.preventDefault();
    dispatch(
      addAcademics({
        token: token,
        fullName: fullName,
        matricMarks: matric,
        school: school,
        fscMarks: fsc,
        college: college,
      })
    );
    alert('Data has been added successfully');
  };

  const deleteAcad = (id) => {
    dispatch(deleteAcademics({ token: token, id: id }));
  };
  return (
    <div className='login-box'>
      <h2>Add Academic Record</h2>
      <form>
        <div className='user-box'>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type='text'
            name=''
            required
          />
          <label>Full Name</label>
        </div>
        <div className='user-box'>
          <input
            value={matric}
            onChange={(e) => setMatric(e.target.value)}
            type='text'
            name=''
            required
          />
          <label>Add Matric Marks</label>
        </div>
        <div className='user-box'>
          <input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            type='text'
            name=''
            required
          />
          <label>Add School Name</label>
        </div>
        <div className='user-box'>
          <input
            value={fsc}
            onChange={(e) => setFSC(e.target.value)}
            type='text'
            name=''
            required
          />
          <label>Add FSC Marks</label>
        </div>
        <div className='user-box'>
          <input
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            type='text'
            name=''
            required
          />
          <label>Add College Name</label>
        </div>

        <button onClick={saveDatatoFirebase}>Submit</button>
      </form>
      <ul className='responsive-table mt-5'>
        <li className='table-header'>
          <div>Name</div>
          <div>Matric Marks</div>
          <div>School Name</div>
          <div>Fsc. Marks</div>
          <div>College Name</div>
          <div>Action</div>
        </li>

        {academics?.map((data, idx) => (
          <>
            <>
              <li className='table-row' key={`${idx}`}>
                <div data-label='Name'>{data?.full_name}</div>
                <div data-label='Speciality'>{data?.matric_marks}</div>
                <div data-label='Merit'>{data?.school}</div>
                <div data-label='Location'>{data?.fsc_marks}</div>
                <div data-label='Location'>{data?.college}</div>
                <div data-label='Action'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteAcad(data._id);
                    }}
                  >
                    <a
                      style={{ textDecoration: 'none', color: 'white' }}
                      href='#!'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Delete
                    </a>
                  </button>
                </div>
              </li>
            </>
          </>
        ))}
      </ul>
    </div>
  );
}

export default AddAcademic;
