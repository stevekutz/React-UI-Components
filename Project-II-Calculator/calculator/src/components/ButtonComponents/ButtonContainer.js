import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import './Button.css';

const ButtonContainer = (props) => {
    console.log('ButtonContainer props in, ', props);


  return (
    <div className = "btn-container">
      <ActionButton buttonStyle = 'wide-btn format'   text = "clear"/>
      <NumberButton buttonStyle = 'func-btn format2'    text = "÷"/>

      <NumberButton
        buttonStyle = 'num-btn format'
        text = "7"
        propsPassedThru = {props}

      />
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

    </div>
  )
};

export default ButtonContainer;
