import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: [],
      display: '',
      total: 9
    };
  }

  // add event handlers here

  render() {
    return (
      <div className = 'main-container'>
        <CalculatorDisplay displayValue = {this.state.total}/>
        <ButtonContainer />
      </div>
    );
  }
}

export default App;
