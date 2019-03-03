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
      total: 9,
      cleared: 0
    };
  }

  // add event handlers here
  changeHandler = event => {
//    console.log("event name", event.target.name);
//    event.persist();  // added to see if onClick ever fired
    console.log("event value", event.target.value);

    const val = event.target.value;

    if(val === "clear"){
      this.clearDisplay();
    } else {
      this.state.inputs.push(event.target.value);
    }

    this.setState({ total: event.target.value })
  };

  clearDisplay = () => {
    this.setState( { inputs: [] } );
    this.setState( { display: ''} );

  };



  render() {
    return (
      <div className = 'main-container'>
        <CalculatorDisplay
         displayValue = {this.state.inputs}
        />
        <ButtonContainer
          handlerProp = {this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
