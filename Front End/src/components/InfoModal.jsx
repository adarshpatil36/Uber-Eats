import React from "react";

import { Modal, Button } from "react-bootstrap";

export default function InfoModal({ handleClose, handleShow, show }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hey hi there!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, your dish is updated!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
