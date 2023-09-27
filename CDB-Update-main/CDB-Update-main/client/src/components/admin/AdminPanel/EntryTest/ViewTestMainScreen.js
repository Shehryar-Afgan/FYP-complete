import React from 'react';
import Sidebar from '../../../user/Navbar/Sidebar';
import { useHistory } from 'react-router-dom';
import MockTest from '../../../../assets/imgs/mock-test.jpg';

export default function ViewTestMainScreen() {
  const history = useHistory();
  const [university, setUniversity] = React.useState();

  const submit = (e) => {
    e.preventDefault();
    try {
      history.push({
        pathname: '/viewTests',
        state: university,
      });
    } catch (error) {}
  };
  return (
    <div>
      <div className='row p-0 m-0'>
        <div
          className='col p-0 m-0'
          style={{ height: '100vh', maxWidth: '300px' }}
        >
          <Sidebar />
        </div>
        <div className='col mt-5' style={{ marginLeft: 'auto' }}>
          <div className='row'>
            <div className='col'>
              <img
                src={MockTest}
                alt='mock test'
                className='mb-5'
                style={{ height: '300px' }}
              />
            </div>
            <div className='col '>
              <div>
                <b>Search Mock Tests by University Name (e.g. Comsats)</b>
              </div>
              <form action='' onSubmit={submit}>
                <input
                  placeholder='Search University'
                  type='text'
                  className='form-control'
                  onChange={(e) => {
                    setUniversity(e.target.value);
                  }}
                />
                <button className='btn btn-success mt-3' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
