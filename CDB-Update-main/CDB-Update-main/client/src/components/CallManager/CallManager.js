import React, { useEffect, useState } from "react";

import CallMediaPlayers from "../CallMediaPlayers/CallMediaPlayers";
import Sidebar from "../CallsSidebar/Sidebar";
import Notifications from "../Notification/Notification";

// Call Types
// 1. audio
// 2. video

const CallManager = ({ callType }) => {
  const classes = {
    appBar: {
      borderRadius: 15,
      margin: "30px 100px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "600px",
      border: "2px solid black",
    },
    image: {
      marginLeft: "15px",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <div style={classes.wrapper}>
      <h1>
        {callType.toLowerCase().includes("audio") ? "Audio Call" : "Video Call"}
      </h1>

      <div className='call-sub-container'>
        {loading ? (
          <div className='loader'></div>
        ) : (
          <CallMediaPlayers callType={callType} />
        )}

        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </div>
  );
};

export default CallManager;
