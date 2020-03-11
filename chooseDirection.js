const chooseDirection = function(options, hungry) {
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

module.exports = chooseDirection;
