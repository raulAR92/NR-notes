import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";
import "../../styles/sass/note.scss";

const Note = ({ note, title, color, show, onUpdate }) => {
  const [noteState, setNote] = useState({
    note,
    title,
    color,
    show,
    edit: {
      title: false,
      body: false,
    },
  });
  const handleClose = () => {
    let note = { ...noteState };
    note.show = !noteState.show;
    setNote(note);
    onUpdate();
  };
  const handleChange = (e, prop) => {
    e.preventDefault();
    let note = { ...noteState };
    note[prop] = e.target.value;
    setNote(note);
    onUpdate();
  };
  const handleEdit = (prop) => {
    let note = { ...noteState };
    note.edit[prop] = true;
    setNote(note);
  };
  const renderTitle = () => {
    if (noteState.edit.title) {
      return (
        <input
          type="text"
          value={noteState.title}
          onChange={(e) => handleChange(e, "title")}
        />
      );
    } else {
      return <div onClick={() => handleEdit("title")}>{noteState.title}</div>;
    }
  };
  const renderBody = () => {
    if (noteState.edit.note) {
      const h = window.innerHeight - 200;

      return (
        <TextareaAutosize
          className="ui-na-note_body edit"
          useCacheForDOMMeasurements
          value={noteState.note}
          onChange={(e) => handleChange(e, "note")}
          style={{ maxHeight: h }}
        />
      );
    } else {
      return <div onClick={() => handleEdit("note")}>{noteState.note}</div>;
    }
  };
  return (
    <div className="ui-na-note">
      <Modal
        show={noteState.show}
        onHide={handleClose}
        className={`ui-na-note ${noteState.color}`}
      >
        <Modal.Header className="ui-na-note_title">
          <Modal.Title>{renderTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ui-na-note_body">{renderBody()}</Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            type="button"
            className="btn btn-outline-secondary"
          >
            Cerrar
          </button>
        </Modal.Footer>
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
