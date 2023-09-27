import { useState, useEffect } from 'react';
import Sidebar from '../Navbar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { loadTestStandings } from '../../../redux/actions/standingsAction';

const CallLog = () => {
  const dispatch = useDispatch();
  const standingsState = useSelector((state) => state.standingsReducer);
  const auth = useSelector((state) => state.authReducer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(loadTestStandings(auth.token));
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    })();
  }, [auth, dispatch, standingsState.testStandingsLoading]);

  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='d-flex flex-column align-items-center'>
          <h1>Test Standings</h1>
          {loading ? (
            <div className='loader' />
          ) : (
            <div
              className='pt-3 w-100'
              style={{ maxHeight: '350px', overflow: 'auto' }}
            >
              <table className='table table-striped table-hover'>
                <thead className='table-dark'>
                  <tr>
                    <th className='text-center'>Standing</th>
                    <th className='text-center'>User</th>
                    <th className='text-center'>Obtained (/10)</th>
                    <th className='text-center'>Attempted On</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsState.testStandings.map((standing, idx) => {
                    return (
                      <tr className='text-center' key={idx}>
                        <td>{idx + 1}</td>
                        <td>
                          <b>{standing.user.name || 'Name not retrievable'}</b>
                        </td>
                        <td>{standing.obtained}</td>
                        <td>{new Date(standing.createdAt).toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallLog;
