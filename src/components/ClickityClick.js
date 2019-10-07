// Code ClickityClick Component Here
import React from 'react'; 

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    this.setState({
      addressInfo: {
        ...this.state.addressInfo,
        city: 'New York City'
      }
    });
  }

  render() {
    return (
      <div>
        <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}


export default ClickityClick;

