const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const app = express();
const {
  fallbackHandler,
  notFoundHandler,
  genericErrorHandler,
  poweredByHandler
} = require('./handlers.js');
const help = require('./helpers.js');
const open = require('./getOpenSquares-helpers.js');
const getDanger = require('./getDanger.js');

// For deployment to Heroku, the port needs to be set using ENV, so
// we check for the port number in process.env
app.set('port', process.env.PORT || 9001);

app.enable('verbose errors');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(poweredByHandler);

// --- SNAKE LOGIC GOES BELOW THIS LINE ---

// Handle POST request to '/start'
app.post('/start', (request, response) => {
  // NOTE: Do something here to start the game
  const info = request.body;
  // Response data
  const data = {
    color: '#DFFF00'
  };

  return response.json(data);
});

// Handle POST request to '/move'
app.post('/move', (request, response) => {
  // NOTE: Do something here to generate your move
  const info = request.body;
  const head = info.you.body[0];
  const openSquares = open.getOpenSquares(info);
  const dir = help.findClosestFood(info, openSquares);
  // const direction = help.chooseDirection(closestFoodArray, info);

  // Response data

  const final = getDanger(info, dir, openSquares);
  // console.log('final: ', final);
  const data = {
    move: 'up' // one of: ['up','down','left','right']
  };
  // console.log('data: ', data);
  return response.json(data);
});

app.post('/end', (request, response) => {
  // NOTE: Any cleanup when a game is complete.
  return response.json({});
});

app.post('/ping', (request, response) => {
  // Used for checking if this snake is still alive.
  return response.json({});
});

// --- SNAKE LOGIC GOES ABOVE THIS LINE ---

app.use('*', fallbackHandler);
app.use(notFoundHandler);
app.use(genericErrorHandler);

app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'));
});
