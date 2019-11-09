import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1>
        {props.text}
      </h1>
    </div>
  );
}

export default Card