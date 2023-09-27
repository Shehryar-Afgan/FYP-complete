import React from "react";
import CallManager from "../../CallManager/CallManager";

const AudioCall = () => {
  return (
    <div className='mt-3'>
      <div className='d-flex align-items-center'>
        <div className='w-100'>
          <CallManager callType={"audio"} />
        </div>
      </div>
    </div>
  );
};

export default AudioCall;
