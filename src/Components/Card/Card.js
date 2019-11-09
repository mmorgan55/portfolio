import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Bree+Serif&display=swap" rel="stylesheet"/>
      </head>
        <h1>
          {props.text}
        </h1>
    </div>
      );
    }
    
export default Card