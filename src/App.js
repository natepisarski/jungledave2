import React, { useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import { Game } from "./Game";
import * as _ from "lodash";
import { handleKeyPress } from "./game/events/keypress";

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

const gameObjectsPrototype = [
  {
    id: 0,
    type: "Canada",
    x: 0,
    y: 0,
    xVelocity: 0,
    yVelocity: 0,
    controlling: true,
    tick: self => ({
      ...self,
      x: self.x + self.xVelocity,
      y: self.y + self.yVelocity
    })
  }
];

const keyHandler = on => ({ key }: SyntheticInputEvent<>) => {
  console.debug('Key handler responding to ', key);
  return on(key);
};

export const App = ({}) => {
  const [score, setScore] = useState(0);
  const [gameObjects, setGameObjects] = useState(gameObjectsPrototype);
  const getCurrentGameObjects = () => gameObjects;

  const setFocus = () => {
    document.getElementById("top").focus();
  };

  const initializeGameLoop = () => {
    const gameLoop = setInterval(() => {
      setGameObjects(oldGameObjects =>
        _.map(oldGameObjects, gameObject => gameObject.tick(gameObject))
      );
    }, 20);
  };

  useEffect(setFocus);

  useEffect(initializeGameLoop, []);

  console.debug("GameObjects ", gameObjects);
  const gameKeyHandler = keyHandler(handleKeyPress(gameObjects, newObjects => setGameObjects(newObjects)));

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
