import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  console.log(`props in NumberButton ${props.text}`, props);

  return (
    <div>
      <button
        className = {props.buttonStyle}


        onClick = { () => props.handlerProp_changeHandler}
      value = {props.text}
     //    name = {props.propsPassedThru.displayValue}

      >
        {props.text}
      </button>
    </div>
  )

};

export default NumberButton;
