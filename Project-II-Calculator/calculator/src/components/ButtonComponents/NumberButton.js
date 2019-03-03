import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  console.log(`props in NumberButton ${props.text}`, props);
  
  const {handlerProp, value, buttonStyle} = props;

  return (
    <div>
      <button
        className = {buttonStyle}
        value = {value}
        onClick = {handlerProp}

      >
        {props.text}
      </button>
    </div>
  )

};

export default NumberButton;
