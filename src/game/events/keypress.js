import { map, merge } from "lodash";

/** Return a function for a given keypress.
 *  The function will take a gameObject and modify it somehow, based on the key. */
const getAppropriateHandler = key => {
  switch (key) {
    case "w":
      return gameObject => ({
        ...gameObject,
        yVelocity: gameObject.yVelocity - 1 // The top left of the screen is (0, 0). Subtracting makes it go up.
      });
    case "a":
      return gameObject => ({
        ...gameObject,
        xVelocity: gameObject.xVelocity - 1
      });
    case "s":
      return gameObject => ({
        ...gameObject,
        yVelocity: gameObject.yVelocity + 1
      });
    case "d":
      return gameObject => ({
        ...gameObject,
        xVelocity: gameObject.xVelocity + 1
      });
    default:
      return () => ({});
  }
};

/** Given a function and a gameObject, apply the transformation - only if it's being controlled. */
const updateControlled = properties => gameObject =>
  gameObject.controlling
    ? merge({}, gameObject, properties(gameObject))
    : gameObject;

//@gameEvent
/** Given all gameObjects and a key, handle the press and apply it to the game data. */
export const handleKeyPress = (gameObjects, updateGameObjects) => key => {
  const updated = map(
    gameObjects,
    updateControlled(getAppropriateHandler(key))
  );
  updateGameObjects(updated);

  return updated;
};
