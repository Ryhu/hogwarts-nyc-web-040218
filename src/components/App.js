import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import ButtonsContainer from '../containers/ButtonsContainer'
import HogsContainer from '../containers/HogsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
        < ButtonsContainer />
        < HogsContainer hogs={hogs}/>
      </div>
    )
  }
}

export default App;
