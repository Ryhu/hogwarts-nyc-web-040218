import React, { Component } from 'react';

class Hog extends Component {
  constructor(props){
    super(props)
  }

  translateHogNameToImg(name) {
    return name.toLowerCase().split(" ").join('_')
  }


  render() {
    return (

      <div className="porker">
        <p>{this.props.info.name}</p>
        <p>{this.props.info.specialty}</p>
        <p>{this.props.info.greased && "Greased"}</p>
        <img src={require("../hog-imgs/" + this.translateHogNameToImg(this.props.info.name) + ".jpg")}/>
        <br /><br /><br />
      </div>

    )
  }
}

export default Hog;
