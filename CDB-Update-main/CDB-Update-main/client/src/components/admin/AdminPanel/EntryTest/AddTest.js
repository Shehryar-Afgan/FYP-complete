import React from 'react';
import axios from 'axios';

export default function AddTest() {
  const [university, setUniversity] = React.useState();
  const [question, setQuestion] = React.useState();
  const [optionA, setOptionA] = React.useState();
  const [optionB, setOptionB] = React.useState();
  const [optionC, setOptionC] = React.useState();
  const [optionD, setOptionD] = React.useState();
  const [correctOption, setcorrectOption] = React.useState();

  const addTest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/test/addTest', {
        university,
        question,
        A: optionA,
        B: optionB,
        C: optionC,
        D: optionD,
        correctOption: correctOption,
      });
      alert(res.data);
    } catch (error) {}
  };
  return (
    <div className='container mt-5'>
      <p className='text-center fw-bold' style={{ fontSize: 30 }}>
        Add Test
      </p>
      <form action='' onSubmit={addTest}>
        <div className='mb-3'>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter University
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Comsats University'
            onChange={(e) => {
              setUniversity(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter Question
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='What is React Js?'
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter Option A
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Option A'
            onChange={(e) => {
              setOptionA(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter Option B
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Option B'
            onChange={(e) => {
              setOptionB(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter Option C
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Option C'
            onChange={(e) => {
              setOptionC(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter Option D
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Option D'
            onChange={(e) => {
              setOptionD(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter Correct Option
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Option A'
            onChange={(e) => {
              setcorrectOption(e.target.value);
            }}
          />
        </div>
        <div className='mb-3' style={{ float: 'right' }}>
          <button className='btn btn-success'>Submit</button>
        </div>
      </form>
    </div>
  );
}
