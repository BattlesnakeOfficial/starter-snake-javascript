const chooseDirection = function(body, directions) {
  // const rise = closestMealArray[0].y - headPosition.y;
  // const run = closestMealArray[0].x - headPosition.x;

  // if (Math.abs(rise) >= Math.abs(run) && rise > 0) {
  //   moveList.push('down');
  //   return 'down';
  // } else if (Math.abs(rise) >= Math.abs(run) && rise < 0) {
  //   moveList.push('up');
  //   return 'up';
  // } else if (Math.abs(rise) <= Math.abs(run) && run > 0) {
  //   moveList.push('right');
  //   return 'right';
  // } else if (Math.abs(rise) <= Math.abs(run) && run < 0) {
  //   moveList.push('left');
  //   return 'left';
  // }
  let direction = null;
  if (body.you.health > 50){
    let minDanger;
    directions.forEach((directionObject,i) => {
      if(Object.keys(directionObject).length == 0 ) return;
      if (directionObject.danger < minDanger || direction === null){
        minDanger = directionObject.danger;
        direction = i;
      }
    });
  }
  else {
    if(Object.keys(directionObject).length == 0 ) return;
    let maxFood;
    directions.forEach((directionObject,i) => {
      if (directionObject.food > maxFood || direction === null){
        maxFood = directionObject.food;
        direction = i;
      }
    });
  }
  console.log(direction)
  switch (direction) {
    case 0:
      return "up"
    case 1:
      return "right"
    case 2:
      return "down"
    case 3:
      return "left"
  }
};

module.exports = chooseDirection;
