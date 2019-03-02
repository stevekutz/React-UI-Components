import React from 'react';
// import ReactDOM from 'react-dom';  // we have this in index.js
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: [],
      display: '',
      number: 9
    };
  }
  render() {
    return (
      <div className = 'main-container'>
        <CalculatorDisplay displayValue = {this.state.number}/>







      </div>





    );
  }
}

export default App;
