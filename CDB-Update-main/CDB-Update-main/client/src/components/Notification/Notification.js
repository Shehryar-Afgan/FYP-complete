import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../SocketContext/Context";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const auth = useSelector((state) => state.authReducer);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={call.isReceivingCall && !callAccepted} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Incoming Call</Modal.Title>
        </Modal.Header>
        <Modal.Body>{call.name} is calling</Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => {
              answerCall(auth.user._id);
              handleClose();
            }}
          >
            Recieve Call
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Notifications;
