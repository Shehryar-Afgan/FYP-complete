/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Sidebar from '../Navbar/Sidebar';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Recommendation() {
  const [metricMarks, setMetricMarks] = useState(0);
  const [fsc1Marks, setFsc1Marks] = useState(0);
  const [field, setField] = useState('');
  const [city, setCity] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState([]);

  const submit = async () => {
    try {
      if (metricMarks && fsc1Marks && field && city) {
        toast.success('Job added to model successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setDisabled(true);
        const res = await axios.post(
          'http://localhost:9600/predict_university',
          {
            metric_marks: metricMarks,
            fsc_marks: fsc1Marks,
            field: field,
            city: city,
          },
          {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:9600',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
          }
        );
        setDisabled(false);
        if (res.data) {
          setData(res.data.predicted_university || []);
        }
      } else {
        toast.error('All fields are required for university recommendation!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } catch (error) {
      toast.error('All fields are required for university recommendation!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  const changeCity = (e) => {
    setCity(e.target.innerText);
  };

  const reset = () => {
    setData([]);
  };

  const changeField = (e) => {
    setField(e.target.innerText);
  };

  const enforceMinMax = (el) => {
    console.log(el.target.value, el.target.min, el.target.max);
    if (el.target.value !== '') {
      if (parseInt(el.target.value) < parseInt(el.target.min)) {
        el.target.value = el.target.min;
      }
      if (parseInt(el.target.value) > parseInt(el.target.max)) {
        el.target.value = el.target.max;
      }
    }
  };

  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 m-0 me-5 p-0' style={{ minHeight: '100vh' }}>
          <Sidebar />
        </div>
        <div className='col mt-5'>
          <div className='container'>
            <div className='d-flex flex-column align-items-center'>
              <h1>University Recommendation Modal</h1>
              <form style={{ width: '50%' }}>
                <label htmlFor=''>Metric marks (Aggregate out of 1100)</label>
                <input
                  className='form-control mb-4'
                  type='number'
                  placeholder={'Metric marks'}
                  min={0}
                  max={1100}
                  onChange={(e) => {
                    setMetricMarks(Number(e.target.value));
                  }}
                  onKeyUp={enforceMinMax}
                />
                <label htmlFor=''>HSSC-I Marks (Aggregate out of 1100)</label>
                <input
                  className='form-control mb-4'
                  type='number'
                  placeholder={'Fsc. Marks'}
                  min={0}
                  max={1100}
                  onChange={(e) => {
                    setFsc1Marks(Number(e.target.value));
                  }}
                  onKeyUp={enforceMinMax}
                />
                <div
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  <div className='dropdown'>
                    <button
                      className='btn btn-secondary dropdown-toggle'
                      style={{ width: '170px', textOverflow: 'ellipsis' }}
                      type='button'
                      id='dropdownMenuButton1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      {field || 'Select Field'}
                    </button>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenuButton1'
                    >
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeField}
                        >
                          MBBS
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeField}
                        >
                          Software Engineering
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeField}
                        >
                          BBA
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeField}
                        >
                          BDS
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeField}
                        >
                          BS Chemistry
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeField}
                        >
                          BDS
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='dropdown'>
                    <button
                      className='btn btn-secondary dropdown-toggle'
                      style={{ minWidth: '170px' }}
                      type='button'
                      id='dropdownMenuButton2'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      {city || 'Select City'}
                    </button>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenuButton2'
                    >
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeCity}
                        >
                          Lahore
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeCity}
                        >
                          Islamabad
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeCity}
                        >
                          Karachi
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeCity}
                        >
                          Rawalpindi
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeCity}
                        >
                          Jamshoro
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeCity}
                        >
                          Topi
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='#'
                          onClick={changeCity}
                        >
                          Sukkur
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Gujrat
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  <button
                    type='submit'
                    className='btn btn-success'
                    disabled={disabled}
                    onClick={(e) => {
                      e.preventDefault();
                      submit();
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type='submit'
                    className='btn btn-success'
                    disabled={disabled}
                    onClick={(e) => {
                      e.preventDefault();
                      reset();
                    }}
                  >
                    Reset
                  </button>
                </div>
              </form>
              {disabled ? (
                <div className='loader' />
              ) : (
                <>
                  {
                    <table className='table table-striped table-hover w-75 mt-5'>
                      <thead className='table-dark'>
                        <tr>
                          <th>Sr. no</th>
                          <th>
                            Top University Recommendations (as per your marks
                            criteria)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((x, idx) => {
                          return (
                            <>
                              <tr>
                                <td>{idx + 1}</td>
                                <td>{x}</td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  }
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
