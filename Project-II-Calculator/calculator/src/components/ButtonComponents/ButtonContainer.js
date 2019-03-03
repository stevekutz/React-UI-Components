import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import './Button.css';

const ButtonContainer = (props) => {
   // console.log('ButtonContainer props in, ', props);

  return (
    <div className = "btn-container">
      <ActionButton {...props} buttonStyle = 'wide-btn format'  value = {"clear"} />
      <NumberButton  {...props} buttonStyle = 'func-btn format2'  value = {"÷"} />
      <NumberButton {...props}  buttonStyle = 'num-btn format'  value = {7}

      />
      <NumberButton {...props} buttonStyle = 'num-btn format'  value = {8} />
      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {9} />
      <NumberButton  {...props} buttonStyle = 'func-btn format' value = {"×"} />

      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {4} />
      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {5} />
      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {6} />
      <NumberButton  {...props} buttonStyle = 'func-btn format'  value = {"−"} />

      <NumberButton  {...props} buttonStyle = 'num-btn format' value = {1} />
      <NumberButton  {...props} buttonStyle = 'num-btn format' value = {2} />
      <NumberButton  {...props} buttonStyle = 'num-btn format'  value = {3} />
      <NumberButton  {...props} buttonStyle = 'func-btn format'  value = {"+"} />

      <ActionButton {...props} buttonStyle = 'wide-btn format zero' value = {0} />
      <NumberButton  {...props} buttonStyle = 'func-btn format'  value = {"="} />

    </div>
  )
};

export default ButtonContainer;
