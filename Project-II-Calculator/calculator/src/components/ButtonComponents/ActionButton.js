import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  // console.log('props in ActionButton', props);

  const {handlerProp, value, buttonStyle} = props;

  if({value} === 'clear') {
    return (
      <button
        className = {buttonStyle}
        value = {value}
      >
        {}
      </button>
    )
  } else {
    return (
      <button
        className = {buttonStyle}
        value = {value}
        onClick = {handlerProp}
      >
        {value}
      </button>
    )
  }




};

export default ActionButton;
