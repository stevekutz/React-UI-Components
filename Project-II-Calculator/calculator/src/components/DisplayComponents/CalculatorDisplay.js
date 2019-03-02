import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {

  return (
    <div className = 'display'>
      <h1 className = 'display-text'>
        {props.displayValue}
      </h1>
    </div>
  )
};

export default CalculatorDisplay;
