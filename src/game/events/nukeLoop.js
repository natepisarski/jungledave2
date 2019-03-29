import { generateRandomCoordinates } from "../board/coordinates";
import { nuke } from "../entities/nuke";

export const nukeLoop = gameObjects => {
    let returned = gameObjects;
    if((+ new Date()) % 100 === 0) {
        returned.push(nuke(...generateRandomCoordinates()));
    }
  return returned;
};
