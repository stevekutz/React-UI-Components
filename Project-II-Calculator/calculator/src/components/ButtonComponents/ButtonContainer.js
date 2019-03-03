import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import './Button.css';

const ButtonContainer = (props) => {
    console.log('ButtonContainer props in, ', props);

    // handlerProp_changeHandler = {props.handlerProp}
    // value = {7}

  return (
    <div className = "btn-container">
      <ActionButton buttonStyle = 'wide-btn format'   text = "clear"/>
      <NumberButton  {...props} buttonStyle = 'func-btn format2'    text = "÷"/>
      <NumberButton {...props}  buttonStyle = 'num-btn format'  value = {7} text = "7"

      />
      <NumberButton {...props} buttonStyle = 'num-btn format'  value = {8}   text = "8"/>
      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {9}  text = "9"/>
      <NumberButton  {...props} buttonStyle = 'func-btn format'    text = "×"/>

      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {4}  text = "4"/>
      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {5}  text = "5"/>
      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {6}  text = "6"/>
      <NumberButton  {...props} buttonStyle = 'func-btn format'    text = "−"/>

      <NumberButton  {...props} buttonStyle = 'num-btn format' value = {1}   text = "1"/>
      <NumberButton  {...props} buttonStyle = 'num-btn format' value = {2}  text = "2"/>
      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {3}   text = "3"/>
      <NumberButton  {...props} buttonStyle = 'func-btn format'    text = "+"/>

      <ActionButton buttonStyle = 'wide-btn format zero'   text = "0"/>
      <NumberButton  {...props} buttonStyle = 'func-btn format'    text = "="/>

    </div>
  )
};

export default ButtonContainer;
