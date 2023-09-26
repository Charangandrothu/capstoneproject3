import React, { Component } from 'react';
import './App.css';


class AgeCalculator extends Component {
  constructor() {
    super();
    this.state = {
      birthdate: '',
      age: null,
    };
  }
 

  handleBirthdateChange = (event) => {
    this.setState({
      birthdate: event.target.value,
    });
  };

  calculateAge = () => {
    const { birthdate } = this.state;
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    
    if (isNaN(birthDate)) {
      alert('Please enter a valid birthdate (YYYY-MM-DD)');
      return;
    }

    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));

    this.setState({
      age: ageInYears,
    });
  };

  render() {
    const { birthdate, age } = this.state;

    return (
      <div className="age-calculator" id='ee'>
        <h1>Age Calculator</h1>
        <div className="input-container">
          <label id='ioo'>Enter your birthdate (YYYY-MM-DD):</label>
          <input id='iu'
            type="text"
            value={birthdate}
            onChange={this.handleBirthdateChange}
          />
        </div>
        <button onClick={this.calculateAge} id='but'>Calculate Age</button>
        {age !== null && (
          <div className="result">
            <p id='nhj'>Your age is: {age} years</p>
          </div>
        )}
      </div>
    );
  }
}

export default AgeCalculator;
