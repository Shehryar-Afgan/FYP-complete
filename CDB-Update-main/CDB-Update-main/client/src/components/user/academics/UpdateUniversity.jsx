import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUniversity } from '../../../redux/actions/universityAction';
import {
  getUniversities,
  deleteUniversity,
} from '../../../redux/actions/universityAction';

function UpdateUniversity() {
  const [universityName, setUniversityName] = useState('');
  const [universitySpeciality, setUniversitySpeciality] = useState('');
  const [universityMerit, setMerit] = useState('');
  const [universityCity, setUniversityCity] = useState('');
  const [universityPage, setUniversityPage] = useState('');
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authReducer);
  const { universities } = useSelector((state) => state.universityReducer);

  useEffect(() => {
    dispatch(getUniversities({ token: token }));
  }, []);

  const saveData = (e) => {
    e.preventDefault();
    if (
      universityName !== '' &&
      universityMerit !== '' &&
      universitySpeciality !== '' &&
      universityCity !== ''
    ) {
      dispatch(
        addUniversity({
          token: token,
          name: universityName,
          merit: universityMerit,
          speciality: universitySpeciality,
          city: universityCity,
          universityPage: universityPage,
        })
      );
      alert('Data has been added successfully');
    }
  };

  const deleteUni = (id) => {
    if (id) {
      dispatch(deleteUniversity({ token, id }));
      alert('University deleted successfully');
    }
  };

  return (
    <>
      <div className='container-view'>
        <form>
          <div className='user-box'>
            <input
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
              type='text'
              name=''
              required
            />
            <label>University Name</label>
          </div>
          <div className='user-box'>
            <input
              value={universitySpeciality}
              onChange={(e) => setUniversitySpeciality(e.target.value)}
              type='text'
              name=''
              required
            />
            <label>University Speciality</label>
          </div>
          <div className='user-box'>
            <input
              value={universityMerit}
              onChange={(e) => setMerit(e.target.value)}
              type='text'
              name=''
              required
            />
            <label>University Merit</label>
          </div>
          <div className='user-box'>
            <input
              value={universityCity}
              onChange={(e) => setUniversityCity(e.target.value)}
              type='text'
              name=''
              required
            />
            <label>University City</label>
          </div>
          <div className='user-box'>
            <input
              value={universityPage}
              onChange={(e) => setUniversityPage(e.target.value)}
              type='text'
              name=''
              required
            />
            <label>University Webpage</label>
          </div>

          <button onClick={saveData}>Submit</button>
        </form>
        <ul className='responsive-table mt-5'>
          <li className='table-header'>
            <div className='col col-1'>Name</div>
            <div className='col col-2'>Speciality</div>
            <div className='col col-3'>Merit</div>
            <div className='col col-4'>City</div>
            <div className='col col-5'>Action</div>
          </li>

          {universities?.map((data, idx) => (
            <>
              <>
                <li className='table-row' key={`${idx}`}>
                  <div className='col col-1' data-label='Name'>
                    {data?.name}
                  </div>
                  <div className='col col-2' data-label='Speciality'>
                    {data?.speciality}
                  </div>
                  <div className='col col-2' data-label='Merit'>
                    {data?.merit}
                  </div>
                  <div className='col col-2' data-label='Location'>
                    {data?.city}
                  </div>
                  <div className='col col-5' data-label='Action'>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteUni(data._id);
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
    </>
  );
}

export default UpdateUniversity;
