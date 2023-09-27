import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io("http://localhost:5000");
// const socket = io("https://warm-wildwood-81069.herokuapp.com");

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");
  const [userIds, setUserIds] = useState({
    myId: "",
    callerId: "",
  });
  const [caller, setCaller] = useState(false);
  const [callTime, setCallTime] = useState({
    startTime: "",
    endTime: "",
  });
  const [audioContext, setAudioContext] = useState(true); // always true since needed in both
  const [videoContext, setVideoContext] = useState(false);

  const myMediaSrc = useRef();
  const userMediaSrc = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator?.mediaDevices
      ?.getUserMedia({ video: videoContext, audio: audioContext })
      .then((currentStream) => {
        setStream(currentStream);

        if (myMediaSrc.current) {
          myMediaSrc.current.srcObject = currentStream;
        }
      })
      .catch((err) => {
        // ignore cases for cases when audio and video context are false
      });

    socket.on("me", (id) => setMe(id));

    socket.on("callUser", ({ from, userId, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
      setUserIds((prev) => {
        return { ...prev, callerId: userId };
      });
    });
  }, [myMediaSrc.current?.innerHTML, audioContext, videoContext]);

  const answerCall = (userId) => {
    setCallAccepted(true);
    setCallTime((prev) => {
      return { ...prev, startTime: new Date().toLocaleString() };
    });

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", {
        signal: data,
        to: call.from,
        name: name,
        userId: userId,
      });
    });

    peer.on("stream", (currentStream) => {
      userMediaSrc.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id, userId) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    setCaller(true);

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        userId: userId,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      userMediaSrc.current.srcObject = currentStream;
    });

    socket.on("callAccepted", ({ signal, name, userId }) => {
      setCallAccepted(true);
      setCallTime((prev) => {
        return { ...prev, startTime: new Date().toLocaleString() };
      });
      setCall({ call, callerName: name });
      setUserIds((prev) => {
        return { ...prev, callerId: userId };
      });
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        caller,
        callAccepted,
        myMediaSrc,
        userMediaSrc,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        audioContext,
        videoContext,
        setAudioContext,
        setVideoContext,
        userIds,
        setUserIds,
        callTime,
        setCallTime,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
