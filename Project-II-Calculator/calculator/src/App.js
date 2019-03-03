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
  changeHandler = event => {
//    console.log("event name", event.target.name);
    event.persist();  // added to see if onClick ever fired
    console.log("event value", event.target.value);

    this.setState({ total: event.target.value })
  };




  render() {
    return (
      <div className = 'main-container'>
        <CalculatorDisplay
          displayValue = {this.state.total}
        />
        <ButtonContainer
          handlerProp = {this.changeHandler}
         // displayValue = {this.state.total}

        />
      </div>
    );
  }
}

export default App;
