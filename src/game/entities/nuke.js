export const NUKE_TYPE = "NUKE";
export const NUKE_COLOR = "yellow";
export const [NUKE_WIDTH, NUKE_HEIGHT] = [16, 16];
export const [NUKE_XVELOCITY, NUKE_YVELOCITY] = [0, 0];
export const NUKE_CONTROLLING = false;

export const nukeTick = self => {
    return {
        ...self,
        x: self.x + self.xVelocity,
        y: self.y + self.yVelocity
    }
};

export const nuke = (x: number, y: number) => {
    return {
        id: 0,
        type: NUKE_TYPE,
        width: NUKE_WIDTH,
        height: NUKE_HEIGHT,
        color: NUKE_COLOR,
        x,
        y,
        xVelocity: NUKE_XVELOCITY,
        yVelocity: NUKE_YVELOCITY,
        controlling: NUKE_CONTROLLING,
        tick: nukeTick
    }
};