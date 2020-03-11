const getOpponentsPositions = function(info) {
  const snakes = info.board.snakes;
  let positions = [];
  for (const snake of snakes) {
    for (const square of snake.body) {
      positions.push(JSON.stringify(square));
    }
  }
  return positions;
};

const getOpenSquares = function(info) {
  let openSquares = [true, true, true, true];
  const head = info.you.body[0];
  const neck = info.you.body[1];
  const filledSquares = getOpponentsPositions(info);

  const north = { x: head.x, y: head.y - 1 };
  const east = { x: head.x + 1, y: head.y };
  const south = { x: head.x, y: head.y + 1 };
  const west = { x: head.x - 1, y: head.y };

  if (
    JSON.stringify(north) === JSON.stringify(neck) ||
    north.y < 0 ||
    filledSquares.includes(JSON.stringify(north))
  ) {
    openSquares[0] = false;
  }
  if (
    JSON.stringify(east) === JSON.stringify(neck) ||
    east.x > info.board.width - 1 ||
    filledSquares.includes(JSON.stringify(east))
  ) {
    openSquares[1] = false;
  }
  if (
    JSON.stringify(south) === JSON.stringify(neck) ||
    south.y > info.board.length - 1 ||
    filledSquares.includes(JSON.stringify(south))
  ) {
    openSquares[2] = false;
  }
  if (
    JSON.stringify(west) === JSON.stringify(neck) ||
    west.x < 0 ||
    filledSquares.includes(JSON.stringify(north))
  ) {
    openSquares[3] = false;
  }

  return openSquares;
};

module.exports = {
  getOpenSquares
};
