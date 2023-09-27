import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLatestResult } from '../../../redux/actions/resultAction';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = () => {
  const dispatch = useDispatch();
  const resultState = useSelector((state) => {
    return state.resultReducer;
  });
  const { token } = useSelector((state) => {
    return state.authReducer;
  });

  useEffect(() => {
    dispatch(getLatestResult(token));
  }, []);

  const labels = resultState.category.map((x) => x.categoryType) || [];
  const tempData = resultState.category.map((x) => x.marks) || [];

  console.log(labels);
  console.log(tempData);

  labels.push('Incorrect');
  tempData.push(
    10 -
      tempData?.reduce(function (a, b) {
        return a + b;
      }, 0)
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Test results',
        hoverOffset: 4,
        backgroundColor: [
          'rgba(80, 201, 191, 0.8)',
          'rgba(111, 172, 31, 0.8)',
          'rgba(162, 84, 185, 0.8)',
          'rgba(255, 188, 5, 0.8)',
        ],
        borderColor: [
          'rgba(80, 201, 191, 1)',
          'rgba(111, 172, 31, 1)',
          'rgba(162, 84, 185, 1)',
          'rgba(255, 188, 5, 1)',
        ],
        hoverBackgroundColor: [
          'rgba(80, 201, 191, 0.5)',
          'rgba(111, 172, 31, 0.5)',
          'rgba(162, 84, 185, 0.5)',
          'rgba(255, 188, 5, 0.5)',
        ],
        borderWidth: 3,
        data: tempData,
      },
    ],
  };

  return (
    <div className='mt-5 text-center'>
      <h2>Aptitude Test Results</h2>
      <div className='row h-50 ms-auto d-flex align-items-center'>
        <div className='col'>
          <span className='d-inline-flex justify-center align-items-baseline'>
            <h4>Marks:</h4>&nbsp;
            {resultState && (
              <>
                {resultState.obtained} / {resultState.total}
              </>
            )}
          </span>
          <h6>Category wise performance</h6>
          {resultState && (
            <ul className='list-group'>
              {resultState.category.map((x, idx) => {
                return (
                  <li
                    className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                    key={`${idx}`}
                  >
                    <b>{x.categoryType}</b>
                    <span className='badge bg-primary rounded-pill'>
                      Obtained: {x.marks}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className='col'>
          <Doughnut data={data} />
        </div>
      </div>
      <figcaption className='figure-caption text-center'>
        Showing only the latest result
      </figcaption>
    </div>
  );
};

export default Result;
