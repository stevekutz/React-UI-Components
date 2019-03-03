import React from 'react';
import './Button.css';

const ActionButton = (props) => {
 // console.log('props in ActionButton', props);

  const {handlerProp, value, buttonStyle} = props;


  return (
    <button
      className = {buttonStyle}
      value = {value}
      onClick = {handlerProp}


    >
      {props.text}
    </button>
  )
};

export default ActionButton;
