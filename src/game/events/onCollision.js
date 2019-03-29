import { CANADA_TYPE } from "../entities/canada";
import { NUKE_TYPE } from "../entities/nuke";
import { retrieve } from "../entities/entityHelper";

export const runCollisionMatrix = (item1, item2, gameObjects, score) => {
  for (const matrice of collisionMatrix) {
    const [type1, type2, func] = matrice;
    if (
      (item1.type === type1 && item2.type === type2) ||
      (item1.type === type2 && item2.type === type1)
    ) {
      return func(item1, item2, gameObjects, score);
    }
  }
  console.debug('COLLISION MATRIX BOTTOMING OUT');
  return gameObjects;
};

const canadaNukeCollision = (item1, item2, gameObjects, score) => {
  const nuke = retrieve("nuke", item1, item2);

  return gameObjects.filter(object => false);
};

/*
The next two things needed here:
    1) You need a way to identify items. This should probably be with a GUID or something assigned at creation. canadaNukeCollision needs it
    2) The nuke generation logic needs to be rate limited
    3) The API is getting fucking insane. HOF's for collision functions could help (gameObjects, score)
 */
export const collisionMatrix = [[CANADA_TYPE, NUKE_TYPE, canadaNukeCollision]];
