import React, { Component } from 'react';
import Forms from './sections/forms'


class App extends Component {

  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
    // this.handleMouseMove = this.handleMouseMove.bind(this) // replacing by arrow function
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e
    this.setState({ mouseX: clientX, mouseY: clientY })
  }

  handleClick (e) {
    console.log(e)
    alert('Hi here!')
  }

  render() {

    return (
        <div className="App">
          <Forms />
        </div>
    )
  }
}

export default App;