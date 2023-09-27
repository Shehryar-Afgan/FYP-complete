import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ApplicantsDetails() {
  const location = useLocation();
  const applicants = location.state;
  console.log(applicants);

  const downloadArtifact = async (url) => {
    window.open(`http://localhost:5000/file/download/${url}`, '_blank');
  };
  return (
    <div>
      <p style={{ marginTop: 30, textAlign: 'center', fontSize: 30 }}>
        Applicants Details
      </p>
      <p>
        <b>Applicant Name:</b> {applicants.name}
      </p>
      <p>
        <b>Applicant Email:</b> {applicants.email}
      </p>
      <b>Job: {applicants?.job_id?.[0].title || ''}</b>
      <div
        className='d-flex justify-content-space-between mt-5'
        style={{ justifyContent: 'space-around' }}
      >
        <div className=''>
          <a
            href='#!'
            onClick={(e) => {
              e.preventDefault();
              downloadArtifact(applicants.cv);
            }}
          >
            <b>CV</b>
          </a>
        </div>
        <div className=''>
          <a
            href='#!'
            onClick={(e) => {
              e.preventDefault();
              downloadArtifact(applicants.fsc);
            }}
          >
            <b>FSC Transcript</b>
          </a>
        </div>
        <div className=''>
          <a
            href='#!'
            onClick={(e) => {
              e.preventDefault();
              downloadArtifact(applicants.matric);
            }}
          >
            <b>Matric Transcript</b>
          </a>
        </div>
      </div>
    </div>
  );
}
