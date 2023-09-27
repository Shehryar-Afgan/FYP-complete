import React, { useState, useEffect, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector, useDispatch } from "react-redux";
import { saveCallLogs } from "../../redux/actions/callLogAction";
import "../../assets/css/CallScreens.css";

import { SocketContext } from "../SocketContext/Context";

const classes = {
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 10,
  },
  paper: {
    border: "3px solid black",
    margin: "10px",
  },
};

const Sidebar = ({ children }) => {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
    callTime,
    setCallTime,
    userIds,
    caller,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(auth?.user?.name || "");
  }, [auth, setName]);

  return (
    <div style={classes.paper}>
      <form style={classes.root} noValidate autoComplete='off'>
        <div style={classes.gridContainer}>
          <div style={classes.padding}>
            <h4>Account Details</h4>
            <input
              type='text'
              label='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CopyToClipboard text={me} style={classes.margin}>
              <button
                variant='contained'
                color='primary'
                onClick={(e) => e.preventDefault()}
              >
                <div className='side-tooltip'>
                  Copy ID
                  <span className='tooltiptext'>
                    Share your meeting ID with others to start meeting with them
                  </span>
                </div>
              </button>
            </CopyToClipboard>
          </div>

          <div style={classes.padding}>
            <h4>Make a call</h4>
            <input
              type='text'
              label='ID to call'
              value={idToCall}
              onChange={(e) => {
                e.preventDefault();
                setIdToCall(e.target.value);
              }}
            />
            {callAccepted && !callEnded ? (
              <button
                variant='contained'
                color='secondary'
                onClick={(e) => {
                  e.preventDefault();
                  setCallTime((prev) => {
                    return { ...prev, endTime: new Date().toLocaleString() };
                  });
                  dispatch(
                    saveCallLogs({
                      callId: me,
                      caller: caller ? userIds.myId : userIds.callerId,
                      receiver: caller ? userIds.callerId : userIds.myId,
                      startTime: callTime.startTime,
                      endTime: new Date().toLocaleString(),
                      token: auth.token,
                    })
                  );
                  leaveCall();
                }}
                style={classes.margin}
              >
                Finish Call
              </button>
            ) : (
              <button
                variant='contained'
                color='primary'
                onClick={(e) => {
                  e.preventDefault();
                  callUser(idToCall, auth.user._id);
                }}
                style={classes.margin}
              >
                <div className='side-tooltip'>
                  Call
                  <span className='tooltiptext'>
                    Enter meeting ID shared with you to start call
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </form>

      {children}
    </div>
  );
};

export default Sidebar;
