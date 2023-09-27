import React from "react";
import { useLocation } from "react-router-dom";

export default function VideoDetail() {
  const location = useLocation();
  const video = location.state;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${video.video.split("=")[1]}`}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        style={{ width: 600, height: 400, justifyContent: "center" }}
      />
    </div>
  );
}
