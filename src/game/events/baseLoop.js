import * as _ from "lodash";
import { nukeLoop } from "./nukeLoop";
import { controlled } from "../entities/entityHelper";
import { checkCollisions } from "../board/collisions";
import { runCollisionMatrix } from "./onCollision";

export const keyHandler = on => ({ key }: SyntheticInputEvent<>) => {
  return on(key);
};

export const perform = (...functions) => (gameObjects) => {
  let intermediateResult = gameObjects;
  for (const func of functions) {
    intermediateResult = func(intermediateResult);
  }
  return intermediateResult;
};

export const tickAll = gameObjects => {
  return _.map(gameObjects, gameObject => gameObject.tick(gameObject));
};

export const nukeAll = gameObjects => {
  return nukeLoop(gameObjects);
};

export const detectAll = gameObjects => {
  const controlling = controlled(gameObjects);
  let newObjects = gameObjects;

  checkCollisions(controlling, gameObjects, (one, two) => {
    console.debug('COLLISION DETECTED');
    newObjects = runCollisionMatrix(one, two, newObjects, 0);
  });

  return newObjects;
};
