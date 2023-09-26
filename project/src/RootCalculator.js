import React, { Component } from 'react';
import './App.css';

class RootCalculator extends Component {
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

  calculateRoot = () => {
    const { number } = this.state;
    const inputNumber = parseFloat(number);

    if (isNaN(inputNumber) || inputNumber < 0) {
      alert('Please enter a valid positive number.');
      return;
    }

    const root = Math.sqrt(inputNumber);

    this.setState({
      result: root,
    });
  };

  render() {
    const { number, result } = this.state;

    return (
      <div className="root-calculator" id='dih'>
        <h1>Square Root Calculator</h1>
        <div className="input-container">
          <label>Enter a positive number:</label>
          <input id='iu'
            type="text"
            value={number}
            onChange={this.handleNumberChange}
          />
        </div>
        <button onClick={this.calculateRoot}>Calculate Square Root</button>
        {result !== null && (
          <div className="result">
            <p>The square root of {number} is: {result}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RootCalculator;
