import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import './Button.css';

const ButtonContainer = () => {

  return (
    <button className = "btn-container">
      <ActionButton buttonStyle = 'wide-btn format'   text = "clear"/>
      <NumberButton buttonStyle = 'func-btn format'    text = "÷"/>

      <NumberButton buttonStyle = 'num-btn format'    text = "7"/>
      <NumberButton buttonStyle = 'num-btn format'    text = "8"/>
      <NumberButton buttonStyle = 'num-btn format'    text = "9"/>
      <NumberButton buttonStyle = 'func-btn format'    text = "×"/>

      <NumberButton buttonStyle = 'num-btn format'    text = "4"/>
      <NumberButton buttonStyle = 'num-btn format'    text = "5"/>
      <NumberButton buttonStyle = 'num-btn format'    text = "6"/>
      <NumberButton buttonStyle = 'func-btn format'    text = "−"/>

      <NumberButton buttonStyle = 'num-btn format'    text = "1"/>
      <NumberButton buttonStyle = 'num-btn format'    text = "2"/>
      <NumberButton buttonStyle = 'num-btn format'    text = "3"/>
      <NumberButton buttonStyle = 'func-btn format'    text = "+"/>

      <ActionButton buttonStyle = 'wide-btn format zero'   text = "0"/>
      <NumberButton buttonStyle = 'func-btn format'    text = "="/>

    </button>
  )
};

export default ButtonContainer;
