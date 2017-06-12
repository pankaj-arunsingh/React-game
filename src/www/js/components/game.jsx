"use strict";

const
    React=require("react"),
    Square=require("./square"),
    Board=require("./board");
module.exports=React.createClass({
    render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
       });
