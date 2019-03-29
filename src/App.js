import React, { useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import { Game } from "./Game";
import * as _ from "lodash";
import { handleKeyPress } from "./game/events/keypress";
import { canada } from "./game/entities/canada";
import {detectAll, keyHandler, nukeAll, perform, tickAll} from "./game/events/baseLoop";

const setFocus = () => {
  document.getElementById("top").focus();
};

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

export const defaultGameObjects = [canada(0, 0)];

export const App = ({}) => {
  const [score, setScore] = useState(0);
  const [gameObjects, setGameObjects] = useState(defaultGameObjects);
  const getCurrentGameObjects = () => gameObjects;

  const performTick = perform(tickAll, nukeAll, detectAll);
  // const performTick = perform(tickAll, nukeAll);

  const initializeGameLoop = () => {
    const gameLoop = setInterval(() => {
      setGameObjects(oldGameObjects => {
        return performTick(oldGameObjects);
      });
    }, 30);
  };

  useEffect(setFocus);

  useEffect(initializeGameLoop, []);

  const gameKeyHandler = keyHandler(
    handleKeyPress(gameObjects, newObjects => setGameObjects(newObjects))
  );

  return (
    <div
      id={"top"}
      tabIndex={0}
      onKeyPress={gameKeyHandler}
      className={"overlay"}
    >
      <GameArea>
        <h1>{"Jungle Dave 2"}</h1>
        <Game {...{ gameObjects }} debug={[]} />
      </GameArea>
    </div>
  );
};
