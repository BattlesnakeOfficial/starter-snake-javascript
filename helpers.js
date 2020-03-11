const moveList = [];

const findClosestFood = function(info, openSquares) {
  const head = info.you.body[0];
  const foodArray = info.board.food;

  //making variables at the locations around the snake head.
  const head_up = { ...head, y: head.y - 1 };
  const head_right = { ...head, x: head.x + 1 };
  const head_down = { ...head, y: head.y + 1 };
  const head_left = { ...head, x: head.x - 1 };
  const squaresToCheck = [head_up, head_right, head_down, head_left];
  const squareRankArray = [];
  let ind = 0;
  if (foodArray) {
    for (const square of squaresToCheck) {
      let squareRank = {};
      let ranking = 0;

      if (openSquares[ind]) {
        //check each directections proximity to food.
        for (const meal of foodArray) {
          let rise = meal.y - square.y;
          let run = meal.x - square.x;
          let distFromSquare = Math.sqrt(rise * rise + run * run);
          let weight = 1 / distFromSquare;
          ranking += weight;
        }

        //after each proximity is calculated push fraction to an array.
        squareRank.food = ranking;
      }
      ind++;
      squareRankArray.push(squareRank);
    }
    // console.log(squareRankArray);
    return squareRankArray;
  }

  //only returns this array of empty objects if there is no food on the board.
  return [{}, {}, {}, {}];
};

const chooseDirection = function(closestMealArray, info) {
  const headPosition = info.you.body[0];
  let lastMove = moveList[moveList.length];
  const rise = closestMealArray[0].y - headPosition.y;
  const run = closestMealArray[0].x - headPosition.x;

  if (Math.abs(rise) >= Math.abs(run) && rise > 0) {
    moveList.push('down');
    return 'down';
  } else if (Math.abs(rise) >= Math.abs(run) && rise < 0) {
    moveList.push('up');
    return 'up';
  } else if (Math.abs(rise) <= Math.abs(run) && run > 0) {
    moveList.push('right');
    return 'right';
  } else if (Math.abs(rise) <= Math.abs(run) && run < 0) {
    moveList.push('left');
    return 'left';
  }
};

module.exports = {
  findClosestFood,
  chooseDirection
};
