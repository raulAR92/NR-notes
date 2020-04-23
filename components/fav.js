import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fav.scss";

const Fav = ({ isFav, handleClick }) => {
  const fav = isFav || false;
  return (
    <div>
      <button
        onClick={handleClick}
        className="ui-na-note_fav_button"
        isfav={fav ? "yes" : "no"}
      >
        {fav ? (
          <FontAwesomeIcon icon={["fas", "star"]} />
        ) : (
          <FontAwesomeIcon icon={["far", "star"]} />
        )}
      </button>
    </div>
  );
};

export default Fav;
