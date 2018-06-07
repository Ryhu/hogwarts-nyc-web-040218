import React, { Component } from 'react';

class ButtonsContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      greasedSelected: false
    }

  }

  sortHogsByName = () => {
    let hogs = this.props.hogs
    hogs.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    return 0;
    });
    this.props.actiony(hogs)
  }

  sortHogsByWeightRatio = () => {
    let hogs = this.props.hogs
    hogs.sort((a,b) => {
      return (a.weightRatio - b.weightRatio)
    })
    this.props.actiony(hogs)
  }

  selectGreasedHogs = () => {
    let hogs = this.props.hogs.filter( (hog) => {
      return hog.greased
    })
    this.props.actiony(hogs)

    this.setState({
      greasedSelected:true
    })
  }

  unSelectGreasedHogs = () => {
    this.props.actiony(this.props.hogs)

    this.setState({
      greasedSelected:false
    })
  }

  greaseButton = () => {
    if (!this.state.greasedSelected){
      return (<button id="greasedHogs" onClick={this.selectGreasedHogs}>Greased</button>)
    }
    else{
      return (<button id="greasedHogs" onClick={this.unSelectGreasedHogs}>All Hogs</button>)
    }
  }

  rez = () => {
    this.props.actiony([])

    setTimeout( () => {this.props.actiony(this.props.hogs)} , 100)
  }

  render() {
    return (
      <div>
        <button id="sortByName" onClick={this.sortHogsByName} >Name</button>
        <button id="sortByWeight" onClick={this.sortHogsByWeightRatio} >Weight</button>
        {this.greaseButton()}
        <button onClick={this.rez} >huge rez</button>
      </div>
    )
  }
}

export default ButtonsContainer;
