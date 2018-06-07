import React, { Component, Fragment } from 'react';

class Hog extends Component {
  constructor(props){
    super(props)

    this.state= {
      classes:"porker ui card"
    }
  }

  translateHogNameToImg(name) {
    return name.toLowerCase().split(" ").join('_')
  }

  handleCardClick = () => {
    this.props.clickHandler(this.props.info.id)

    // this.setState( (prevState) => ({
    //   flipped: !prevState.flipped
    // }))
  }

  poof = () => {
    console.log("hi")
    this.setState({
      classes: "porker ui card poof"
    })
  }

  hogRenderConditional = () => {
    if (!this.props.flipped){
      return (
        <div>
          <p>{this.props.info.name}</p>
          <p>{this.props.info.specialty}</p>
          <p>{this.props.info.greased ? "Greased" : "unGreased"}</p>
          <button onClick={this.poof}>poof</button>
          <img src={require("../hog-imgs/" + this.translateHogNameToImg(this.props.info.name) + ".jpg")}/>
        </div>
      )
    }
    else{
      return(
        <p>stuff here</p>
      )
    }
  }

  render() {
    return (

      <div id={this.props.info.id} className={this.state.classes} onClick={this.handleCardClick}>
        {this.hogRenderConditional()}
      </div>

    )
  }
}

export default Hog;
