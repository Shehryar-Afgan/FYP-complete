import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Applicant from '../../../../assets/imgs/applicant.jpg';

export default function ViewApplicants() {
  const [data, setData] = React.useState([]);
  const { token } = useSelector((state) => state.authReducer);
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get('/file/viewApplicants', {
        headers: {
          Authorization: 'Bearer ' + (token || localStorage.getItem('token')),
        },
      });
      console.log(res);
      setData(res.data);
    } catch (error) {}
  };

  console.log(data);

  const history = useHistory();
  const handleClick = (data) => {
    history.push({
      pathname: '/applicantDetails',
      state: data,
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p style={{ marginTop: 30, textAlign: 'center', fontSize: 30 }}>
        <b>All Applicants</b>
      </p>
      <img
        src={Applicant}
        style={{ width: '500px', height: '300px' }}
        alt='Applicants'
      />
      <table className='table table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>Applicant</th>
            <th>Email</th>
            <th>Job</th>
            <th>View Application</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                {data.job_id.map((job) => {
                  return job.title;
                })}
              </td>
              <td>
                <button
                  className='btn btn-success'
                  onClick={() => {
                    handleClick(data);
                  }}
                >
                  Go to Application
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
