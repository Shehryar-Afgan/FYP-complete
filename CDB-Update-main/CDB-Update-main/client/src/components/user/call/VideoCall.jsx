import React from "react";
import CallManager from "../../CallManager/CallManager";

const VideoCall = () => {
  return (
    <div className='mt-3'>
      <div className='d-flex align-items-center'>
        <div className='w-100'>
          <CallManager callType={"video"} />
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
