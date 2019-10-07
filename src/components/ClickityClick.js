import React from 'react';

class ClickityClick extends React.Component{

    constructor(){
        super();
        // we need to define the initial state.
        this.state = {
            hasBeenClicked: false,
        };
    };

    handleClick= () => {
        // once we click this will change the state to true
        this.setState({
            hasBeenClicked: true
        })
    };

    render(){
        return(
            /*
            if this.state.hasBeenClicked is null or false, it will be I have not been clicked
            there is an eventhanlder on the button.
            */
            <div>
                <p>I have {this.state.hasBeenClicked ? false : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    };



}

export default ClickityClick