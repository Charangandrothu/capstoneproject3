import React, { Component } from 'react';
import './App.css';

class RandomNumberGenerator extends Component {
  constructor() {
    super();
    this.state = {
      minRange: 1,
      maxRange: 100,
      randomNumber: null,
    };
  }

  handleMinRangeChange = (event) => {
    this.setState({
      minRange: parseInt(event.target.value),
    });
  };

  handleMaxRangeChange = (event) => {
    this.setState({
      maxRange: parseInt(event.target.value),
    });
  };

  generateRandomNumber = () => {
    const { minRange, maxRange } = this.state;

    if (minRange >= maxRange) {
      alert('Invalid range. The minimum value should be less than the maximum value.');
      return;
    }

    const randomNum = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    this.setState({
      randomNumber: randomNum,
    });
  };

  render() {
    const { minRange, maxRange, randomNumber } = this.state;

    return (
      <div className="random-number-generator">
        <h1>Random Number Generator</h1>
        <div className="input-container">
          <label>Minimum Range:</label>
          <input id='iu'
            type="number"
            value={minRange}
            onChange={this.handleMinRangeChange}
          />
        </div>
        <div className="input-container">
          <label>Maximum Range:</label>
          <input id='iu'
            type="number"
            value={maxRange}
            onChange={this.handleMaxRangeChange}
          />
        </div>
        <button onClick={this.generateRandomNumber}>Generate Random Number</button>
        {randomNumber !== null && (
          <div className="result">
            <p>Random Number: {randomNumber}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RandomNumberGenerator;
