import React, { useState } from 'react';
import '../../../assets/css/AddAcademics.css';

function CalculateAggregate({ aggregate, setAggregate }) {
  const [matric, setMatric] = useState(0); // 10%
  const [fsc, setFSC] = useState(0); //30%
  const [entryTest, setEntryTest] = useState(0); // 60%

  return (
    <div className='login-box'>
      <h2>Calculate Your Aggregate</h2>
      <form>
        <div className='user-box'>
          <input
            value={matric}
            onChange={(e) => setMatric(Number(e.target.value))}
            type='number'
            name=''
            required=''
          />
          <label>Enter SSC Mark out of 1050 (10%)</label>
        </div>
        <div className='user-box'>
          <input
            value={fsc}
            onChange={(e) => setFSC(Number(e.target.value))}
            type='number'
            name=''
            required=''
          />
          <label>Enter HSSC Marks out of 1100 (30%)</label>
        </div>
        <div className='user-box'>
          <input
            value={entryTest}
            onChange={(e) => setEntryTest(Number(e.target.value))}
            type='number'
            name=''
            required=''
          />
          <label>Enter Entry Test Marks out of 100 (60%)</label>
        </div>
        <h3>Calculated Aggregate: {aggregate}%</h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            const matricAvg = (matric / 1050) * 10;
            const fscAvg = (fsc / 1100) * 30;
            const entryTestAvg = (entryTest / 100) * 60;
            setAggregate((matricAvg + fscAvg + entryTestAvg).toFixed(2));
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Calculate
        </button>
        <button
          style={{ marginLeft: 10 }}
          onClick={(e) => {
            e.preventDefault();
            setMatric(0);
            setFSC(0);
            setEntryTest(0);
            setAggregate(0);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Clear
        </button>
      </form>
    </div>
  );
}
export default CalculateAggregate;
