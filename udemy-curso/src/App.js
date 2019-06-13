import React, { Component } from 'react';
import EjemploComponentWillUnmount from './sections/life-cycle/ejemploComponentWillUnmount'

class App extends Component {
  render() {
    return (
        <div className="App">
          <EjemploComponentWillUnmount />
        </div>
    )
  }
}

export default App;