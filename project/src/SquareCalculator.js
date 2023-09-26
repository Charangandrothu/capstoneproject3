import React, { Component } from 'react';
import './App.css';
class SquareCalculator extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      result: null,
    };
  }

  handleNumberChange = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  calculateSquare = () => {
    const { number } = this.state;
    const inputNumber = parseFloat(number);

    if (isNaN(inputNumber)) {
      alert('Please enter a valid number.');
      return;
    }

    const square = inputNumber * inputNumber;

    this.setState({
      result: square,
    });
  };

  render() {
    const { number, result } = this.state;

    return (
      <div className="square-calculator" id='ee'>
        <h1>Square Calculator</h1>
        <div className="input-container">
          <label>Enter a number:</label>
          <input id='iu'
            type="text"
            value={number}
            onChange={this.handleNumberChange}
          />
        </div>
        <button onClick={this.calculateSquare}>Calculate Square</button>
        {result !== null && (
          <div className="result">
            <p>The square of {number} is: {result}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SquareCalculator;
