import React, { Component } from 'react';
import './App.css';

class PercentageCalculator extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      percentage: '',
      result: null,
    };
  }

  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  handlePercentageChange = (event) => {
    this.setState({
      percentage: event.target.value,
    });
  };

  calculatePercentage = () => {
    const { amount, percentage } = this.state;
    const parsedAmount = parseFloat(amount);
    const parsedPercentage = parseFloat(percentage);

    if (isNaN(parsedAmount) || isNaN(parsedPercentage)) {
      alert('Please enter valid numbers for both amount and percentage.');
      return;
    }

    const result = (parsedAmount * parsedPercentage) / 100;

    this.setState({
      result: result.toFixed(2), // Round the result to two decimal places
    });
  };

  render() {
    const { amount, percentage, result } = this.state;

    return (
      <div className="percentage-calculator" id='ouu'>
        <h1>Percentage Calculator</h1>
        <div className="input-container">
          <label>Enter Amount:</label>
          <input id='iu'
            type="text"
            value={amount}
            onChange={this.handleAmountChange}
          />
        </div>
        <div className="input-container">
          <label>Enter Percentage:</label>
          <input id='iu'
            type="text"
            value={percentage}
            onChange={this.handlePercentageChange}
          />
        </div>
        <button onClick={this.calculatePercentage}>Calculate Percentage</button>
        {result !== null && (
          <div className="result">
            <p>{percentage}% of {amount} is: {result}</p>
          </div>
        )}
      </div>
    );
  }
}

export default PercentageCalculator;
