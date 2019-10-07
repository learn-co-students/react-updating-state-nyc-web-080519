// Code ClickityClick Component Here
import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false 
    }
  }

  handleClick = () => {
    //this would only work once since it hard codes the value of the hasBeenClicked key in state to true
    // this.setState({
    //   hasBeenClicked: true
    // })

    //toggles between true/false for each click by passing in current state
    this.setState(state => ({
      hasBeenClicked: !state.hasBeenClicked
    }))
    
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}


export default ClickityClick;