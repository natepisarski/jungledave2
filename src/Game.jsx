import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as _ from "lodash";

const gameObjectsPrototype = [
  {
    id: 0,
    type: "Canada",
    x: 0,
    y: 0,
    xVelocity: 0,
    yVelocity: 1,
    tick: self => ({
      ...self,
      xVelocity: self.xVelocity + 1,
      x: self.x + self.xVelocity,
      y: self.y + self.yVelocity
    })
  }
];

const FreeObject = styled.div`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: 150px;
  height: 150px;
  background-color: blue;
`;

const GameObject = ({ id, type, x, y, xVelocity, yVelocity }) => {
  return <FreeObject {...{ x, y, xVelocity, yVelocity, id, type }} />;
};

export const Game = ({}) => {
  const [score, setScore] = useState(0);
  const [gameObjects, setGameObjects] = useState(gameObjectsPrototype);
  const getCurrentGameObjects = () => gameObjects;

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setGameObjects(oldGameObjects =>
        _.map(oldGameObjects, gameObject => gameObject.tick(gameObject))
      );
    }, 500);
  }, []);

  console.debug("RENDERED!");
  const renderGameObjects = object => <GameObject {...object} />;

  return _.map(gameObjects, renderGameObjects);
};
