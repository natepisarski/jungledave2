import React, { Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import {Game} from "./Game";

const GameArea = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-color: lightgray;
  min-height: 100%;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div className={"overlay"}>
        <GameArea>
          <h1>{'Jungle Dave 2'}</h1>
            <Game/>
        </GameArea>
      </div>
    );
  }
}

export default App;
