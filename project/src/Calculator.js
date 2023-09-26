import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      operand1: null,
      operator: null,
      waitingForOperand2: false,
    };
  }

  handleDigitClick = (digit) => {
    const { display, waitingForOperand2 } = this.state;

    if (waitingForOperand2) {
      this.setState({
        display: digit,
        waitingForOperand2: false,
      });
    } else {
      this.setState((prevState) => ({
        display: prevState.display === '0' ? digit : prevState.display + digit,
      }));
    }
  };

  handleOperatorClick = (operator) => {
    const { display, operand1 } = this.state;

    if (operand1 === null) {
      this.setState({
        operand1: parseFloat(display),
        operator,
        waitingForOperand2: true,
      });
    } else {
      this.calculateResult();
      this.setState({
        operator,
        waitingForOperand2: true,
      });
    }
  };

  calculateResult = () => {
    const { display, operand1, operator } = this.state;
    const operand2 = parseFloat(display);

    let result = 0;

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        if (operand2 !== 0) {
          result = operand1 / operand2;
        } else {
          result = 'Error';
        }
        break;
      default:
        break;
    }

    this.setState({
      display: result.toString(),
      operand1: result,
      operator: null,
      waitingForOperand2: false,
    });
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      operand1: null,
      operator: null,
      waitingForOperand2: false,
    });
  };

  handleEqualClick = () => {
    this.calculateResult();
  };

  render() {
    const { display } = this.state;

    return (
      <div className="calculator" id='iy' >
        <div className="display">{display}</div>
        <div className="buttons" >
          <div className="button-row"  id='q' >
            <button onClick={() => this.handleDigitClick('7')}  id='aa'>7</button>
            <button onClick={() => this.handleDigitClick('8')}  id='aa'>8</button>
            <button onClick={() => this.handleDigitClick('9')}  id='aa'>9</button>
            <button onClick={() => this.handleOperatorClick('+')} id='aa'>+</button>
          </div>
          <div className="button-row" >
            <button onClick={() => this.handleDigitClick('4') } id='aa'>4</button>
            <button onClick={() => this.handleDigitClick('5')} id='aa'>5</button>
            <button onClick={() => this.handleDigitClick('6')} id='aa'>6</button>
            <button onClick={() => this.handleOperatorClick('-')} id='aa'>-</button>
          </div>
          <div className="button-row" >
            <button onClick={() => this.handleDigitClick('1')} id='aa'>1</button>
            <button onClick={() => this.handleDigitClick('2')} id='aa'>2</button>
            <button onClick={() => this.handleDigitClick('3')} id='aa'>3</button>
            <button onClick={() => this.handleOperatorClick('*')} id='aa'>*</button>
          </div>
          <div className="button-row" >
            <button onClick={() => this.handleDigitClick('0')} id='aa'>0</button>
            <button onClick={() => this.handleClearClick()}  id='aa'>C</button>
            <button onClick={() => this.handleEqualClick()} id='aa'>=</button>
            <button onClick={() => this.handleOperatorClick('/')} id='aa'>/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
