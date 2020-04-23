import React, { useContext, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./minNote.scss";

const MinNote = ({ note, title, color, handleClick, key }) => {
  const noteString = (note || "").substring(150, 0);
  console.log(color);

  return (
    <Col className="ui-na-note_min" xs={6} md={4}>
      <Card
        bg={color.toLowerCase()}
        key={key}
        text={color.toLowerCase() === "light" ? "dark" : "white"}
      >
        <Card.Body onClick={handleClick}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`${noteString}...`}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
};

MinNote.propTypes = {
  note: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default MinNote;
