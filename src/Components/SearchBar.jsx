import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
export default function SearchBar() {
  const [show, setShow] = useState(false);
  return (
    <div className="search w-75 mx-auto">
      <input className="search-input" />
      <Button onClick={() => setShow(true)} className="btn-primary add">
        <AiOutlinePlus /> Add new
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            className="text-primary"
          >
            New Employee
          </Modal.Title>
        </Modal.Header>
        <p className="fs-4 text-primary ms-3"> Personal Info</p>
        <Modal.Body>
          <div>
            <div className="d-flex">
              <div className="doted d-flex justify-content-center align-items-center">
                <p>Drag Image Here</p>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="d-flex">
                  <div>
                    <label className="d-block">Name</label>
                    <input className="w-100" />
                  </div>
                  <div className="ms-3">
                    <label className="d-block">Start date</label>
                    <input className="w-100" />
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <label className="d-block">Phone</label>
                    <input className="w-100" />
                  </div>
                  <div className="ms-3">
                    <label className="d-block">Email</label>
                    <input className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
