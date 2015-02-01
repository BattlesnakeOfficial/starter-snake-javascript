var config      = require('./config.json');
var bodyParser  = require('body-parser');
var express     = require('express');
var app         = express();
var routes      = require('./routes');

app.set('port', (config.port || process.env.PORT));

app.use(bodyParser.json());
app.use(routes);

// Middleware to short-circuit favicon requests
app.use(function (req, res, next) {
  if (req.url === '/favicon.ico') {
    res.set({'Content-Type': 'image/x-icon'});
    res.status(200);
    res.end();
  }
});

var server = app.listen(app.get('port'), function () {
  console.log('Server listening at http://%s:%s', config.host, app.get('port'));
});
