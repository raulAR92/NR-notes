import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const Note = ({ note, title, color, show }) => {
  const [noteState, setNote] = useState({ note, title, color, show });
  const handleClose = () => setNote({ show: !noteState.show });
  return (
    <div>
      <Modal show={noteState.show} onHide={handleClose}>
        <Modal.Dialog className={noteState.color}>
          <Modal.Header closeButton>
            <Modal.Title>{noteState.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{noteState.note}</Modal.Body>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  show: PropTypes.bool,
};

export default Note;
