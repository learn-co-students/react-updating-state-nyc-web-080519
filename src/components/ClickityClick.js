// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
  constructor(){
    super()

    this.state = {
      toggled: false,
      phrase: "Not clicked yet"
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled,
        phrase: previousState.toggled ? "Not clicked yet" : "Already been clicked"
      }
    })
    
  }

  render(){
    return (
      <div>
        <p>I have {this.state.toggled ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.phrase}</button>
      </div>
    )
  }
}