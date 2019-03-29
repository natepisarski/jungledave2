import { filter } from "lodash";

export const controlled = gameObjects =>
  filter(gameObjects, object => object.controlling);

export const retrieve = (type, ...entities) => {
    for(const entity of entities) {
        if(entity.type === type) {
            return entity;
        }
    }
};