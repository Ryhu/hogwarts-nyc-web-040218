import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import ButtonsContainer from '../containers/ButtonsContainer'
import HogsContainer from '../containers/HogsContainer'

class App extends Component {

  state = {
    renderOrder: hogs
  }


  changeRenderOrder = (hoggs) => {
    this.setState({
      renderOrder: hoggs
    })
  }

  render() {
    return (
      <div className="App">
        < Nav />
      < ButtonsContainer hogs={hogs} actiony={this.changeRenderOrder}/>
      < HogsContainer hogs={this.state.renderOrder}/>
      </div>
    )
  }
}

export default App;
