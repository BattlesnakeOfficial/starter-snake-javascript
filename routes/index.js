var config  = require('../config.json');
var express = require('express');
var router  = express.Router();

// Get the state of the snake
router.get(config.routes.state, function (req, res) {
  // Do something here to calculate the returned state

  // Response data
  var data = {
    name: config.snake.name,
    color: config.snake.color,
    head_url: config.snake.head_url,
    taunt: config.snake.taunt.state,
    state: "alive",
    coords: [[0, 0], [0, 1], [0, 2], [1, 2]],
    score: 4
  };

  return res.json(data);
});

// Start
router.post(config.routes.start, function (req, res) {
  // Do something here to start the game
  // Hint: do something with the incoming game_id? ;)
  console.log('Game ID:', req.body.game_id);

  // Response data
  var data = {
    name: config.snake.name,
    color: config.snake.color,
    head_url: config.snake.head_url,
    taunt: config.snake.taunt.start
  };

  return res.json(data);
});

// Move
router.post(config.routes.move, function (req, res) {
  // Do something here to generate your move

  // Response data
  var data = {
    move: 'up', // one of: ["up", "down", "left", "right"]
    taunt: 'What?!' || config.snake.taunt.move
  };

  return res.json(data);
});

// End the session
router.post(config.routes.end, function (req, res) {
  // Do something here to end your snake's session

  // We don't need a response so just send back a 200
  res.status(200);
  res.end();
  return;
});


module.exports = router;
