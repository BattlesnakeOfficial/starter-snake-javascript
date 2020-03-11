const rankDanger = (body, directions, possibleSquares) => {
  // Get heads of other snakes
  let heads = body.board.snakes
    .map(snake => snake.body[0])
    .filter(
      head =>
        head.x !== body.you.body[0].x || head.y !== body.you.body[0].y
    );

  // Calculates and assigns danger of possible squares
  possibleSquares.forEach((squarePossible, i) => {
    if (!squarePossible) return;
    let danger = 0;
    let steppedSquare = getStep(i, body.you.body[0]);
    heads.forEach(head => {
      danger += 1 / getRadialDistance(head, steppedSquare);
    });
    directions[i].danger = danger;
  });

  return directions;
};

const getRadialDistance = (square1, square2) =>
  Math.sqrt(
    (square1.x - square2.x) ** 2 + (square1.y - square2.y) ** 2
  );

//take in position and direction, return square travelled to
const getStep = (direction, location) => {
  if (direction === 0) {
    return { ...location, y: location.y - 1 };
  }
  if (direction === 2) {
    return { ...location, y: location.y + 1 };
  }
  if (direction === 1) {
    return { ...location, x: location.x + 1 };
  }
  if (direction === 3) {
    return { ...location, x: location.x - 1 };
  }
};

module.exports = rankDanger;
