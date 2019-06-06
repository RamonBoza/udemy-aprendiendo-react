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

class Title extends Component {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

Title.defaultProps = {
  title: 'Default Title'
}


class Contador extends Component {
  constructor() {
    super()
    this.state = { contador: 1 }
  }

  render() {
    return <span>{this.state.contador}</span>
  }
}

class ContadorClassFields extends Component {
  state = { contador: 1 }

  render() {
    return <span>{this.state.contador}</span>
  }
}

class ContadorAutoIncrement extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }

  render() {
    return <ContadorNumero numero={this.state.contador} />
  }
}

ContadorAutoIncrement.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>
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
        <Title />
        <ContadorAutoIncrement contadorInicial={100} />
      </header>
    </div>
  );
}

export default App;
