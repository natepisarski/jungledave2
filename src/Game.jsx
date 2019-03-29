import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as _ from "lodash";

const FreeObject = styled.div`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.color};
`;

const GameObject = ({ id, type, x, y, width, height, color, xVelocity, yVelocity }) => {
  return <FreeObject {...{ x, y, xVelocity, width, height, color, yVelocity, id, type }} />;
};

export const Game = ({gameObjects}) => {
  const renderGameObjects = object => <GameObject {...object} />;

  return (
    <div>
      {_.map(gameObjects, renderGameObjects)}
    </div>
  );
};
