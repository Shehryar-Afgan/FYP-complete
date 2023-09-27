import React, { useEffect } from 'react';
import '../../../assets/css/Table.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUniversities } from '../../../redux/actions/universityAction';

function ApplicableInstitues({ aggregate }) {
  const { token } = useSelector((state) => state.authReducer);
  const { universities } = useSelector((state) => state.universityReducer);
  const dispatch = useDispatch();
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
          </li>

          {universities
            ?.filter((data) => {
              return aggregate > Number(data.merit);
            })
            .map((data) => (
              <>
                <>
                  <li className='table-row'>
                    <div className='col col-1' data-label='Name'>
                      {data?.name}
                    </div>
                    <div className='col col-2' data-label='City'>
                      {data?.speciality}
                    </div>
                    <div className='col col-3' data-label='Shop Name'>
                      {data?.merit}
                    </div>
                    <div className='col col-4' data-label='Rating'>
                      {data?.city}
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

export default ApplicableInstitues;
