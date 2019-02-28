import React from 'react';
import './Card.css';

const CardText = () => {
  return (
    <div className = "card-text">
      <h1 className = "card-h1"> Get Started with React </h1>
      <p className = "card-p">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <div className = "linkText">
        <a href = "https://www.reactjs.org"> reactjs.org </a>
      </div>

    </div>


  )



};

export default CardText;