import React, { Component } from 'react';
import Hog from '../components/Hog.js';


class HogsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      flippedHog: null
    }
  }


  hogClick = (hogId) => {
    this.setState( {
      flippedHog: hogId
    })
  }

  hogFlipManager = () => {
    console.log(this.props.hogs)
    {return this.props.hogs.map( (hog) => {
      if (hog.id === this.state.flippedHog){
        return <Hog key={hog.id} info={hog} clickHandler={this.hogClick} flipped={true}/>
      }
      else{
        console.log("ihit")
        return <Hog key={hog.id} info={hog} clickHandler={this.hogClick} flipped={false}/>
      }
    })}
  }


  render() {
    return (
      <div className="ui cards">
        {this.hogFlipManager()}

      </div>
    )
  }
}

export default HogsContainer;
