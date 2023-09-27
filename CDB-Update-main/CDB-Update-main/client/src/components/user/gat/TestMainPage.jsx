import React from "react";
import { Link } from "react-router-dom";

const TestMainPage = () => {
  return (
    <div className='col-8 m-5'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <h3>Introduction</h3>
        </div>
        <div>
          <h5>About:</h5>
          <p>
            This is a mixed aptitude test. This test consist of 10 questions
            with a time limit of 10 minutes.
          </p>
        </div>
        <div>
          <h5>Instructions:</h5>
          <p>When you are ready click the "Begin" button.</p>
        </div>
        <div className='d-flex justify-content-center'>
          <Link className='btn btn-success mt-3 px-5' to='/gat/cattest'>
            Begin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestMainPage;
