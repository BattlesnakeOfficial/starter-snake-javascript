const findClosestFood = function(info) {
  head = info.you.body[0];
  foodArray = info.board.food;
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

const chooseDirection = function(closestMealArray, headPosition, moveList) {
  console.log(moveList);
  // console.log(closestMealArray);
  // console.log(headPosition);
  const rise = closestMealArray[0].y - headPosition.y;
  const run = closestMealArray[0].x - headPosition.x;

  if (Math.abs(rise) >= Math.abs(run) && rise > 0) {
    return 'down';
  } else if (Math.abs(rise) >= Math.abs(run) && rise < 0) {
    return 'up';
  } else if (Math.abs(rise) <= Math.abs(run) && run > 0) {
    return 'right';
  } else if (Math.abs(rise) <= Math.abs(run) && run < 0) {
    return 'left';
  } else {
    return 'you fucked up';
  }
};

module.exports = {
  findClosestFood,
  chooseDirection
};
