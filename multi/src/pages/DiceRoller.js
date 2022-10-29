import React, { Component } from 'react';


class Die extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            num: Math.floor(Math.random()*20) + 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(event) {
        event.preventDefault();
        this.state.num = Math.floor(Math.random()*20) + 1;
        this.forceUpdate();
    }
   
   
    render() {
        return (
            <div className="die-div">
                <img className="die" alt={this.state.num} src={"d20/d20-" + this.state.num + ".png"} title={this.state.num} onClick={this.handleClick} />
            </div>
        );
    }
}


const DiceRoller = () => {
  return (
    <div>
        <h1>Dice Roller</h1>
       
        <h2>Click on the d20 to roll it!</h2>
        <br />
        <Die />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       
    </div>
  );
};

export default DiceRoller;