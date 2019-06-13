import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css'

import { Home } from "./pages/Home";
import {Detail} from "./pages/Detail";

class App extends Component {


  render() {

    const url = new URL(document.location)
    const hasID = url.searchParams.has('id')

    if(hasID){
      return <Detail id={url.searchParams.get('id')}/>
    }

    return (
        <div className="App">
          <Home />
        </div>
    );
  }
}

export default App;
