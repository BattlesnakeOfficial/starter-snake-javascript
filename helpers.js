const findClosestFood = function(info) {
  const head = info.you.body[0];
  const foodArray = info.board.food;
  let closestMealArray = [];
  const distancesToMeals = [];
  let minDist = 100;

  for (const meal of foodArray) {
    let rise = meal.y - head.y;
    let run = meal.x - head.x;
    let distFromHead = Math.sqrt(rise * rise + run * run);
    if (distFromHead <= minDist) {
      minDist = distFromHead;
      let closestMeal = {};
      closestMeal.x = meal.x;
      closestMeal.y = meal.y;
      closestMeal.dist = distFromHead;
      closestMealArray.push(closestMeal);
    }
  }
  return closestMealArray.filter(m => m.dist === minDist);
};

const moveList = [];
const chooseDirection = function(closestMealArray, info) {
  const headPosition = info.you.body[0];
  const border = [info.board.width, info.board.height];
  console.log(moveList);
  let lastMove = moveList[moveList.length];
  // console.log(closestMealArray);
  // console.log(headPosition);
  const rise = closestMealArray[0].y - headPosition.y;
  const run = closestMealArray[0].x - headPosition.x;
  if ((info.turn = 1)) {
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
    } else {
      return 'you fucked up';
    }
  }
};

module.exports = {
  findClosestFood,
  chooseDirection
};
