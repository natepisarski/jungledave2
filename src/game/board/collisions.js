const areColliding = (objectOne, objectTwo) => {
  // An object is colliding if two squares are touching.
  /*
  This algorithm boils down to:
  Object one's midpoin
   */
    const xCollision = Math.abs(objectOne.x - objectTwo.x) < Math.abs(((objectOne.width + objectTwo.width) / 2));
    const yCollision = Math.abs(objectOne.y - objectTwo.y) < Math.abs(((objectOne.height + objectTwo.height) / 2));
    return xCollision || yCollision;
};

/**
 * Collision detection is passed a list of objects that you want to check, since checking objects like nukes would waste
 * quite a few cycles. This will pretty much only be "controlling" objects.
 * @param checking
 * @param board
 * @param onCollision
 */
export const checkCollisions = (checking, board, onCollision=(()=>{})) => {
    for(const object of checking) {
        for(const otherObject of board) {
            if(areColliding(object, otherObject)) {
                onCollision(object, otherObject);
            }
        }
    }
};