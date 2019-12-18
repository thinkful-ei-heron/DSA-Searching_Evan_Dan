import React, { Component } from 'react';
import LinearSearch from './LinearSearch';
import BinarySearch from './BinarySearch';
import './App.css';

class App extends Component {
  state = {
    input: null,
    search: false,
    dataset: [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5
    ]
  };

  getValue = e => {
    e.preventDefault();
    this.setState({ input: e.target.value.value, search: true });
  };

  render() {
    console.log(this.state.input);
    return (
      <div className="App">
        <header className="App-header">
          <p>Search Algorithms</p>
        </header>
        <form onSubmit={e => this.getValue(e)}>
          <label>Enter Value to Searh for</label>
          <input name="value"></input>
          <button type="submit">Submit</button>
        </form>
        {this.state.search ? <LinearSearch input={this.state.input} dataset={this.state.dataset} /> : ''}
        {this.state.search ? <BinarySearch input={this.state.input} dataset={this.state.dataset} /> : ''}
      </div>
    );
  }
}

export default App;
