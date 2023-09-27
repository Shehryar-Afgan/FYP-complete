import React, { useContext, useEffect } from "react";
import "../../assets/css/CallScreens.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

import { SocketContext } from "../SocketContext/Context";

const CallMediaPlayers = ({ callType }) => {
  const {
    name,
    callAccepted,
    myMediaSrc,
    userMediaSrc,
    callEnded,
    stream,
    call,
    setVideoContext,
    setAudioContext,
    setUserIds,
  } = useContext(SocketContext);
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    setVideoContext(callType.toLowerCase().includes("video"));
    setAudioContext(true);
    setUserIds((prev) => {
      return { ...prev, myId: user._id };
    });
  }, [setVideoContext, callType, user._id, setUserIds, setAudioContext]);

  useEffect(() => {
    return () => {
      setAudioContext(false);
      setVideoContext(false);
    };
  }, []);

  return (
    <div
      className={`${
        callType === "audio" && callAccepted && !callEnded
          ? "audio-grid-container"
          : "grid-container"
      }`}
    >
      {stream && (
        <div className='media-container'>
          <h3 style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              className='blinking text-danger bg-danger border'
              style={{ borderRadius: "50%", width: 14, height: 14 }}
              icon={faDotCircle}
            />
            &nbsp;{name || "Name"}
          </h3>
          {callType.toLowerCase().includes("video") ? (
            <video
              playsInline
              muted
              ref={myMediaSrc}
              autoPlay
              className='video'
            />
          ) : (
            <div className='audio-container'>
              <div className='audio-element personal'>
                <img src='https://placeimg.com/100/100/nature' alt='personal' />
              </div>
              <audio
                playsInline
                muted
                ref={myMediaSrc}
                className='audio'
                autoPlay
              />
            </div>
          )}
        </div>
      )}
      {callAccepted && !callEnded && (
        <>
          {callType === "audio" && <div className='seperator'></div>}
          <div className='media-container'>
            <h3>{call.callerName || call.name || "Name"}</h3>
            {callType.toLowerCase().includes("video") ? (
              <video
                playsInline
                ref={userMediaSrc}
                autoPlay
                className='audio'
              />
            ) : (
              <div className='audio-container'>
                <div className='audio-element other'>
                  <img src='https://placeimg.com/100/100/nature' alt='other' />
                </div>
                <audio
                  playsInline
                  ref={userMediaSrc}
                  className='audio'
                  autoPlay
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CallMediaPlayers;
