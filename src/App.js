import React, { useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import { Game } from "./Game";
import * as _ from "lodash";
import { handleKeyPress } from "./game/events/keypress";
import { canada } from "./game/entities/canada";
import { nukeLoop } from "./game/events/nukeLoop";

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

const keyHandler = on => ({ key }: SyntheticInputEvent<>) => {
  console.debug("Key handler responding to ", key);
  return on(key);
};

const perform = (...functions) => gameObjects => {
  let intermediateResult = gameObjects;
  for (const func of functions) {
    intermediateResult = func(intermediateResult);
  }
  return intermediateResult;
};

const tickAll = gameObjects => {
  return _.map(gameObjects, gameObject => gameObject.tick(gameObject));
};

const nukeAll = gameObjects => {
  return nukeLoop(gameObjects);
};

export const App = ({}) => {
  const [score, setScore] = useState(0);
  const [gameObjects, setGameObjects] = useState(defaultGameObjects);
  const getCurrentGameObjects = () => gameObjects;

 const performTick = perform(tickAll, nukeAll);

  const setFocus = () => {
    document.getElementById("top").focus();
  };

  const initializeGameLoop = () => {
    const gameLoop = setInterval(() => {
      setGameObjects(oldGameObjects => {
        return performTick(oldGameObjects);
      });
    }, 20);
  };

  useEffect(setFocus);

  useEffect(initializeGameLoop, []);

  console.debug("GameObjects ", gameObjects);
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
