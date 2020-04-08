const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const app = express();
const {
  fallbackHandler,
  genericErrorHandler,
  poweredByHandler,
} = require('./handlers.js');

// For deployment to Heroku, the port needs to be set using ENV, so
// we check for the port number in process.env
app.set('port', process.env.PORT || 9001);

app.enable('verbose errors');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(poweredByHandler);

// --- SNAKE LOGIC GOES BELOW THIS LINE ---

//  This function is called everytime your snake is entered into a game.
//  request.body contains information about the game that's about to be played.
// TODO: Use this function to decide how your snake is going to look on the board.
app.post('/start', (request, response) => {
  console.log('START');
  var data = request.body;

  // Response data
  const data = {
    color: '#888888', // Choose a hex colour code to style your snake https://www.google.com/search?q=hex+colour+picker
    headType: 'regular',
    tailType: 'regular',
  };

  return response.json(data);
});

// This function is called on every turn of a game. It's how your snake decides where to move.
// Valid moves are "up", "down", "left", or "right".
// TODO: Use the information in request.body to decide your next move.
app.post('/move', (request, response) => {
  console.log(request.body);

  // Choose a random direction to move in
  possible_moves = ['up', 'down', 'left', 'right'];
  var choice = Math.floor(Math.random() * possible_moves.length);
  var snake_move = possible_moves[choice];

  console.log(`MOVE: ${snake_move}`);
  return response.json({ move: snake_move });
});

// This function is called when a game your snake was in ends.
// It's purely for informational purposes, you don't have to make any decisions here.
app.post('/end', (_, response) => {
  console.log('END');
  return response.json({ message: 'ok' });
});

// The Battlesnake engine calls this function to make sure your snake is working.
app.post('/ping', (_, response) => {
  console.log('PING');
  return response.json({ message: 'pong' });
});

// --- SNAKE LOGIC GOES ABOVE THIS LINE ---

app.use('*', fallbackHandler);
app.use(genericErrorHandler);

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
