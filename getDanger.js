const { getOpponentsPositions } = require('./getOpenSquares-helpers')

const getDanger = (body, directions, possibleSquares) => {
  let heads = body.board.snakes.map(snake => snake.body[0]).filter(head => head.x !== body.you.body[0].x || head.y !== body.you.body[0].y);
  possibleSquares.forEach((bool, i) => {
    if(!possibleSquares[i]) return;
    let danger = 0;
    let steppedSquare = getStep(i ,body.you.body[0])
    heads.forEach(head => {
      danger += 1 / getRadialDistance(head, steppedSquare)
    });
    directions[i].danger = danger;
  });
  console.log(freeSquares(body, {x:3, y:2}, 1))
  return directions;
}

const getRadialDistance = (square1, square2) => {
  return Math.sqrt((square1.x - square2.x) ** 2 + (square1.y - square2.y) ** 2); 
}

const listHasSquare = (testSquare, squaresList) => {
  for (const square of squaresList){
    if( square.x === testSquare.x && square.y === testSquare.y){
      return true;
    }
  }
  return false;
}

const freeSquares = (info, steppedSquare, n) => {
  let dangerSquares = 0;
  const takenSquares = getOpponentsPositions(info).map(obj => JSON.parse(obj));
  for(let i = steppedSquare.x - n; i < steppedSquare.x + n; i++){
    for(let j = steppedSquare.y - n; j < steppedSquare.y + n; j++){
      if(j > info.board.height || j < 0 || i > info.board.width || i < 0){
        dangerSquares += 1;
      }
      else if(listHasSquare({x:i, y:j}, takenSquares)){
        dangerSquares += 1;
      }
    }
  }
  return dangerSquares;
}

//take in position and direction, return square travelled to
const getStep = (direction, location) => {
  if (direction === 0){
    return { ...location, y: location.y - 1}
  }
  if (direction === 2){
    return { ...location, y: location.y + 1}
  }
  if (direction === 1){
    return { ...location, x: location.x + 1}
  }
  if (direction === 3){
    return { ...location, x: location.x - 1}
  }
}

module.exports = getDanger