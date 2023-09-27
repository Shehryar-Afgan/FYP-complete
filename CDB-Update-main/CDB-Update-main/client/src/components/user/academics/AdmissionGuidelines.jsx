import React, { useEffect } from 'react';
import '../../../assets/css/Table.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUniversities } from '../../../redux/actions/universityAction';

function AdmissionGuide() {
  const dispatch = useDispatch();
  const { universities } = useSelector((state) => state.universityReducer);
  const { token } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(getUniversities({ token: token }));
  }, []);

  return (
    <>
      <div className='container-view'>
        <ul className='responsive-table'>
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
                    <button>
                      <a
                        style={{ textDecoration: 'none', color: 'white' }}
                        href={data?.university_page}
                        target='_blank'
                        rel='noreferrer'
                      >
                        Explore
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

export default AdmissionGuide;
