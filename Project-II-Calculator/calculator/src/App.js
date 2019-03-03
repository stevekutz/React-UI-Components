import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: '',   // change this to string
      display: '',
      total: '',
      operatorLimit: false,
      firstCharNeg: false,
      operator: '',
      cleared: 0
    };
  }

  // add event handlers here
  changeHandler = event => {
//    console.log("event name", event.target.name);
    event.persist();  // added to see if onClick ever fired
    let displayArr = this.state.inputs.slice();
    console.log("event value", event.target.value);

    const val = event.target.value;

    console.log('!!!!!!', val !== "=" );

    // REFACTOR THIS !!!!!!
   const validValue = (val) => {
      return ( (this.checkOperator(val)
                && !this.state.operatorLimit))
        ||  (!this.checkOperator(val) )
    };

   const charNegative = (index) => {
     return (displayArr[index] === "−")
   };

/*
    const validValue = (val) => {
      return (
                 ( calcStr.length === 0 && val === '-') ||
                 ( calcStr.length === 0 && !isNaN(val)) ||
                 (this.checkOperator(val) && !this.state.operatorLimit)
              );
    };
*/

    // test if numeric char using isNaN, if
    // allow first char to be - & then a subtract symbol and then - - or - op
    // first char cannot be op except -
    // char after num1 is allowed to be negative

    let calcStr = this.state.inputs.slice();


      if(val === "clear" || (calcStr.length === 0  && val === "=")){
        this.clearDisplay();
      } else if (val === "="){
          calcStr = this.state.inputs.slice();
          const operatorVal = this.state.operator;
              this.doMath(calcStr, operatorVal);
      } else if (validValue(val) ){
          displayArr += val;
          this.setState({inputs: displayArr});
      }

      console.log('###### displayArr[displayArr.length -1] ', displayArr[displayArr.length -1]);

    // if an operator, set operatorLimit flag
    if( displayArr.length > 0 && this.checkOperator(val) && !charNegative(0) )
      this.setState
        ({ operatorLimit: true,
           operator: displayArr[displayArr.length -1]
        });
    

  };

  clearDisplay = () => {
    this.setState({
      inputs: [],
      display: '',
      operatorLimit: false,
      operator: '',
      operatorIndex: 0
    })
  };

  checkOperator = (value) => {
    return (value === "÷" || value === "×" || value === "−" || value === "+");
  };

  doMath = (str, op) => {


    // read into an array without commas, then split out on operator

  //  let mathArr2 = arr.toString().replace(/,/g, '').split(op);
    console.log('str in DoMath is ', str);
    console.log('op in DoMath is ', op);

    let mathArr = str.split(op);

    console.log('mathArr is ', mathArr);

    let num1 = 0;
    let num2 = 0;

/*
    if(mathArr[0].length > 0) {
      num1 = parseFloat(mathArr[0].replace(/,/g, ''));
    }

    if(mathArr[1].length > 0 ) {
      num2 = parseFloat(mathArr[1].replace(/,/g, ''));
    }

    console.log(num1);
    console.log(num2);
*/
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
