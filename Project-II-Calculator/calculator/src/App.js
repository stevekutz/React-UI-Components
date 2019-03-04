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
      indexVal: 1,
      operatorLimit: false,
      cleared: 0,
        mathObj: {
          val1: '',
          val2: '',
          operatorVal: '',
          total: '',
        }
      };
    };


  // add event handlers here
  changeHandler = event => {
  //    console.log("event name", event.target.name);
      event.persist();  // added to see if onClick ever fired
    //  let displayArr = this.state.inputs.slice();
      console.log("event value", event.target.value);

      // aliases
      const val = event.target.value;
      const math = this.state.mathObj;

      // helper func
      let getNumber = (obj, i, val) => {
        if (((obj[`val${i}`] === '') && (val === "−")) || (!isNaN(val))) {
          obj[`val${i}`] += val;
          return this.setState({inputs: obj[`val${i}`]});
        } else if ( this.checkOperator(val)  && !this.state.operatorLimit) {
            math[`operatorVal`] = val;     // find operator
            return this.setState({
              operatorLimit: true,
              indexVal: 2,
            });
        }
      };

          // clear & reset state if clear entered
      if(val === "clear"){
        this.clearDisplay();
        // if both inputs provided and equal button selected, do the math
      } else if(val === "=" && math.val1 !== '' && math.val2 !== '') {
        this.setState({ inputs: this.doMath(math)});
        // if operator not set, get first number
      } else if(val === "=" && math.val1 !== '' && math.val2 !== '') {
         this.setState({ inputs: this.doMath(math)});
         // if operator not set, get first number
      } else if(!this.state.operatorLimit) {
          getNumber(math, 1, val)
        // if operator entered, save it to state & set flag so no more can be entered
      } else if ( this.checkOperator(val)  && !this.state.operatorLimit) {
            math[`operatorVal`] = val;     // find operator
            this.setState({ operatorLimit: true});
        //    operator is set, get second number
      } else if(this.state.operatorLimit) {
          getNumber(math, 2, val)
      }

  };

    doMath = (math) => {
      // watch for divide by 0 !!
      // need to convert to Numbers,
      // adjust screen for largest numbers?

      console.log('math inside doMath is', math);
      const a = Number(math.val1);
      const b = Number(math.val2);

      // helper callback functions
      let sum = (a,b) => a + (1*b);
      let sub = (a, b) => a - (1*b);
      let mult = (a, b) => a * (1*b);
      let div = (a, b) => a / (1*b);
      let mathCalc = (a, b, cb) => cb(a,b);

      switch(math.operatorVal) {
        case "+": return math.total = mathCalc(a, b, sum);
        case "−": return math.total = mathCalc(a, b, sub);
        case "×": return math.total = mathCalc(a, b, mult);
        case "÷": return math.total = mathCalc(a, b, div);
        default: return '';
      }

    };

    clearDisplay = () => {
      this.setState({
        inputs: '',
        display: '',
        total: '',
        indexVal: 1,
        operatorLimit: false,
        cleared: 0,
        mathObj: {
          val1: '',
          val2: '',
          operatorVal: ''
        }
      });
    };

    checkOperator = (value) => {
      return (value === "÷" || value === "×" || value === "−" || value === "+");
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
