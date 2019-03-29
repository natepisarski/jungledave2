import {NUKE_TYPE} from "./nuke";

export const CANADA_TYPE = "canada";
export const CANADA_COLOR = "blue";
export const [CANADA_WIDTH, CANADA_HEIGHT] = [16, 16];
export const [CANADA_XVELOCITY, CANADA_YVELOCITY] = [0, 0];
export const CANADA_CONTROLLING = true;

export const canadaTick = self => {
  return {
      ...self,
      x: self.x + self.xVelocity,
      y: self.y + self.yVelocity
  }
};

export const canada = (x: number, y: number) => {
    return {
        id: 0,
        type: CANADA_TYPE,
        width: CANADA_WIDTH,
        height: CANADA_HEIGHT,
        color: CANADA_COLOR,
        x,
        y,
        xVelocity: CANADA_XVELOCITY,
        yVelocity: CANADA_YVELOCITY,
        controlling: CANADA_CONTROLLING,
        tick: canadaTick
    }
};