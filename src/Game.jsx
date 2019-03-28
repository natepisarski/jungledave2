import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as _ from "lodash";

const FreeObject = styled.div`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: 16px;
  height: 16px;
  background-color: blue;
`;

const GameObject = ({ id, type, x, y, xVelocity, yVelocity }) => {
  return <FreeObject {...{ x, y, xVelocity, yVelocity, id, type }} />;
};

export const Game = ({gameObjects}) => {
  console.debug("RENDERED!");
  const renderGameObjects = object => <GameObject {...object} />;

  return (
    <div>
      {_.map(gameObjects, renderGameObjects)}
    </div>
  );
};
