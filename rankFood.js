const rankFood = function(head, foodArray, possibleMoves) {
  //making variables at the locations around the snake head.
  const head_up = { ...head, y: head.y - 1 };
  const head_right = { ...head, x: head.x + 1 };
  const head_down = { ...head, y: head.y + 1 };
  const head_left = { ...head, x: head.x - 1 };
  const squaresToCheck = [head_up, head_right, head_down, head_left];
  const squareRankArray = [];

  for (const square of squaresToCheck) {
    let squareRank = {};
    let ranking = 0;

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
    squareRankArray.push(squareRank);
  }
  // console.log(squareRankArray);
  return squareRankArray;
};

module.exports = rankFood;
