import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  // console.log(`props in NumberButton ${props.text}`, props);

   const {handlerProp, value, buttonStyle} = props;

  /*
         Does the same as
         {handlerProp} = props.handlerProp
   */

// DOES NOT WORK !!!!
// onClick = { () => props.handlerProp_changeHandler}
// onClick = { () => props.handlerProp}

  return (
    <div>
      <button
        className = {buttonStyle}
        value = {value}
        onClick = {handlerProp}
      >
        {value}
      </button>
    </div>
  )

};

export default NumberButton;
