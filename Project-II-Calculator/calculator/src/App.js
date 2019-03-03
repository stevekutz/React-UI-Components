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
      total: '',
      operatorLimit: false,
      cleared: 0
    };
  }

  // add event handlers here
  changeHandler = event => {
//    console.log("event name", event.target.name);
    event.persist();  // added to see if onClick ever fired
    const displayArr = this.state.inputs.slice();
    console.log("event value", event.target.value);

    const val = event.target.value;

    console.log('!!!!!!', val !== "=" );
    const validValue = (val) => {
      return ( (this.checkOperator(val) && !this.state.operatorLimit))
        ||  (!this.checkOperator(val) )
    };


    if(val === "clear"){
        this.clearDisplay();
    } else if (val === "="){
        this.doMath(this.state);
    } else if (validValue(val)){
        displayArr.push(val);
        this.setState({inputs: displayArr});
    }

    // if an operator, set operatorLimit flag
    if(this.checkOperator(val) )  this.setState( { operatorLimit: true } );

  //  this.setState({ inputs: displayArr });
  //   this.setState({ total: event.target.value });
  };

  clearDisplay = () => {
    this.setState( { inputs: [] } );
    this.setState( { display: ''} );
    this.setState( { operatorLimit: false}  );
  };

  checkOperator = (value) => {
    return (value === "÷" || value === "×" || value === "−" || value === "+");
  };

  doMath = () => {
    console.log('!!!!!!!!!!!!!!! MATH TIME   !!!!!!', this.state);
    this.clearDisplay();

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
