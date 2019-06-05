import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Hello (props) {
  return <h2>{props.title}</h2>
}

// const Hello = (props) => <h2>{props.title}</h2>

class Text extends Component {
  render() {

    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props

    const mappedNumber = arrayOfNumbers.map(multiply)

    return (
        <div>
          <p>{title}</p>
          <p>{mappedNumber.join(', ')}</p>
          <p>{objectWithInfo.key}</p>
        </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello title='Hellow from props'/>
        <Text
            arrayOfNumbers={[2, 3, 10]}
            objectWithInfo={{ key: 'First Value', key2: 'otherVAlue' }}
            isActivated
            multiply={ (number => number * 4)}
            number={2}
            title={<h1>This is a title</h1>}
        />
      </header>
    </div>
  );
}

export default App;
