import { useState, useEffect } from 'react';
import Sidebar from '../Navbar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getCallLogs } from '../../../redux/actions/callLogAction';

const CallLog = () => {
  const dispatch = useDispatch();
  const { logs } = useSelector((state) => state.calllogReducer);
  const auth = useSelector((state) => state.authReducer);
  const [loading, setLoading] = useState(true);

  function format(seconds) {
    var numhours = parseInt(
      Math.floor(((seconds % 31536000) % 86400) / 3600),
      10
    );
    var numminutes = parseInt(
      Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),
      10
    );
    var numseconds = parseInt((((seconds % 31536000) % 86400) % 3600) % 60, 10);
    return (
      (numhours < 10 ? '0' + numhours : numhours) +
      ':' +
      (numminutes < 10 ? '0' + numminutes : numminutes) +
      ':' +
      (numseconds < 10 ? '0' + numseconds : numseconds)
    );
  }

  useEffect(() => {
    (async () => {
      await dispatch(getCallLogs({ userId: auth.user._id, token: auth.token }));
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    })();
  }, [auth, dispatch]);

  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='d-flex flex-column align-items-center'>
          <h1>Call Logs</h1>
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
                    <th>Call ID</th>
                    <th>Call type</th>
                    <th>Source</th>
                    <th>
                      Call Duration
                      <br /> (hh:mm:ss)
                    </th>
                    <th>Call Date</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          <b>{log?.call_id || 'Id not retrievable'}</b>
                        </td>
                        <td>
                          {log.receiving_user?.[0]?.name === auth.user.name
                            ? 'Incoming'
                            : 'Outgoing'}
                        </td>
                        <td>
                          <b>
                            {(log.receiving_user?.[0]?.name === auth.user.name
                              ? log.calling_user?.[0]?.name
                              : log.receiving_user?.[0]?.name) ||
                              'Source name not retrievable'}
                          </b>
                        </td>
                        <td>
                          {format(
                            Math.round(
                              (new Date(log?.end_time) -
                                new Date(log?.start_time)) /
                                1000
                            )
                          )}
                        </td>
                        <td>
                          {new Date(log?.start_time).toLocaleDateString()}
                          <br />
                          {new Date(log?.start_time).toLocaleTimeString()}
                        </td>
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
