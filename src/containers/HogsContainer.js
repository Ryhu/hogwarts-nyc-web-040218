import React, { Component } from 'react';
import Hog from '../components/Hog.js';

class HogsContainer extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>
        {this.props.hogs.map( (hog) => {
          return <Hog info={hog} />
        })}

      </div>
    )
  }
}

export default HogsContainer;
