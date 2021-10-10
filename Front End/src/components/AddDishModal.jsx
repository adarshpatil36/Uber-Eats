import React from "react";

import { Modal, Button, Form, Row, Col } from "react-bootstrap";

export default function AddDishModal({
  handleClose,
  show,
  handleNewDish,
  saveNewDish,
  newDish,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Dish</Modal.Title>
        </Modal.Header>
        <Form className="modal-form">
          <Form.Group
            as={Row}
            className="mb-6 m-3"
            controlId="formPlaintextEmail"
          >
            <Form.Label column sm="3">
              Dish Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="name"
                className="modal-Qty"
                value={newDish["name"]}
                onChange={(e) => {
                  handleNewDish(e);
                }}
              />
            </Col>
            <Form.Label column sm="3">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="description"
                className="modal-Qty"
                onChange={(e) => {
                  handleNewDish(e);
                }}
              />
            </Col>
            <Form.Label column sm="3">
              Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="price"
                className="modal-Qty"
                onChange={(e) => {
                  handleNewDish(e);
                }}
              />
            </Col>
            <Form.Label column sm="3">
              Rating
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="rating"
                className="modal-Qty"
                onChange={(e) => {
                  handleNewDish(e);
                }}
              />
            </Col>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveNewDish}>
            Save Dish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
