import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiDeleteBin3Line } from 'react-icons/ri';

export default function ViewJobs() {
  const [data, setData] = React.useState([]);
  const [searchJob, setSearch] = React.useState();
  const [job, setJob] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  const { user, token } = useSelector((state) => state.authReducer);
  const history = useHistory();
  React.useEffect(() => {
    getData();
    getApplicantFiles();
  }, []);

  const getApplicantFiles = async () => {
    try {
      const res = await axios.post('/file/get-files-for-applicant', {
        name: user.name,
        email: user.email,
      });
      setFiles(res.data);
    } catch (err) {}
  };

  const getData = async () => {
    try {
      if (user.role === 2) {
        const res = await axios.get('/job/getUserPostedJobs', {
          headers: {
            Authorization: 'Bearer ' + (token || localStorage.getItem('token')),
          },
        });
        setData(res.data);
      } else {
        const res = await axios.get('/job/viewJobs');
        // console.log(res)
        setData(res.data);
      }
    } catch (error) {}
  };

  const search = async (e) => {
    e.preventDefault();
    console.log(searchJob);
    try {
      const res = await axios.post('/job/searchbylocation', {
        location: searchJob,
      });
      setJob(res?.data);
    } catch (error) {}
  };

  const filterDate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('/job/searchbyDate');
      console.log(res);
      setData(res.data);
    } catch (error) {}
  };
  return (
    <div>
      <form action='' onSubmit={search}>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control w-50 mt-3 mb-3'
            placeholder='Search By Location or Company Name'
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className='btn btn-outline-success btn-sm'
            type='submit'
            id='button-addon2'
            style={{ marginLeft: 410 }}
          >
            Search
          </button>
        </div>
      </form>
      <div className='row'>
        <form action='' onSubmit={filterDate}>
          <div className='' style={{ float: 'right', marginRight: 100 }}>
            <button className='btn btn-success' type='submit'>
              Filter by Date
            </button>
          </div>
        </form>
      </div>
      <div className='row'>
        {searchJob
          ? job.map((job) => (
              <div className='col-5 p-3 border m-3'>
                <div className='d-flex  align-items-center'>
                  <img
                    src='react.png'
                    alt=''
                    width={30}
                    height={30}
                    style={{ marginRight: 10 }}
                  />
                  <p className='pt-3'>{job.title}</p>
                </div>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <p>Experience Required: {job.experience}</p>
                {user.role === 0 && (
                  <>
                    <button
                      className='btn btn-secondary'
                      onClick={() => {
                        history.push(`/upload/${job._id}`);
                      }}
                      disabled={Boolean(
                        files?.find((x) => {
                          return x?.job_id === job?._id;
                        })
                      )}
                    >
                      Apply Now
                    </button>
                    &nbsp;
                    <b>
                      {Boolean(
                        files?.find((x) => {
                          return x?.job_id === job?._id;
                        })
                      )
                        ? 'Already applied, you will be notified!'
                        : 'Eligible'}
                    </b>
                  </>
                )}
              </div>
            ))
          : data.map((job) => (
              <div className='col-5 p-3 border m-3'>
                <div className='d-flex  align-items-center'>
                  <img
                    src='react.png'
                    alt=''
                    width={30}
                    height={30}
                    style={{ marginRight: 10 }}
                  />
                  <p className='pt-3'>{job.title}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                  {user.role === 2 && (
                    <RiDeleteBin3Line
                      color={'red'}
                      style={{ cursor: 'pointer' }}
                      onClick={async () => {
                        try {
                          const res = await axios.delete(
                            `/job/delete-job/${job._id}`,
                            {
                              headers: {
                                Authorization:
                                  'Bearer ' +
                                  (token || localStorage.getItem('token')),
                              },
                            }
                          );
                          setData(res.data);
                        } catch (e) {
                          // handler deletion error
                        }
                      }}
                    />
                  )}
                </div>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <p>Experience Required: {job.experience}</p>
                {user.role === 0 && (
                  <>
                    <button
                      className='btn btn-secondary'
                      onClick={() => {
                        history.push(`/upload/${job._id}`);
                      }}
                      disabled={Boolean(
                        files?.find((x) => {
                          return x?.job_id === job?._id;
                        })
                      )}
                    >
                      Apply Now{' '}
                    </button>
                    &nbsp;
                    <b>
                      {Boolean(
                        files?.find((x) => {
                          return x?.job_id === job?._id;
                        })
                      )
                        ? 'Already applied, you will be notified!'
                        : 'Eligible'}
                    </b>
                  </>
                )}
                &nbsp;
              </div>
            ))}
      </div>
    </div>
  );
}
