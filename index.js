process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var fs = require('fs');
var https = require('https');
var path = require('path');

var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, 'dist')));

var options = {
  key: fs.readFileSync('./file.pem'),
  cert: fs.readFileSync('./file.crt'),
};
var serverPort = 3001;

var server = https.createServer(options, app);
var io = require('socket.io')(server);

app.get('/screen', function(req, res) {
  // res.sendFile(__dirname + '/public/index.html');
  res.sendFile(path.join(__dirname, 'dist/iscreen', 'index.html'));
});

app.get('*', function(req, res) {
  // res.sendFile(__dirname + '/public/index.html');
  res.sendFile(path.join(__dirname, 'dist/iremote', 'index.html'));
});

const remote = io.of('/remote');
const screen = io.of('/screen');

const getY = function(beta) {
  const MAX_Y_ANGLE = 10;
  if (
    (beta > 0 && beta <= MAX_Y_ANGLE) ||
    (beta < 0 && beta >= MAX_Y_ANGLE * -1)
  ) {
    return (100 / MAX_Y_ANGLE) * (beta * -1);
  } else {
    if (beta > 0) {
      return -100;
    } else {
      return 100;
    }
  }
};

const getX = function(alpha) {
  var MAX_X_ANGLE = 10;

  // Left/right rotation.
  if (alpha > 360 - MAX_X_ANGLE) {
    // phone is rotating right:
    return (100 / MAX_X_ANGLE) * (360 - alpha);
  } else if (alpha < MAX_X_ANGLE) {
    // phone is rotating left:
    return (100 / MAX_X_ANGLE) * (0 - alpha);
  } else {
    // Stop rotation at max angle.
    if (alpha > MAX_X_ANGLE && alpha < 180) {
      return -100;
    } else {
      return 100;
    }
  }
};

remote.on('connection', function(socket) {
  console.log('new REMOTE connection' + socket.id);
  socket.emit('message', 'remote side.');

  socket.on('position', function(gyroscope) {
    const newPosition = {
      alpha: gyroscope.alpha,
      beta: gyroscope.beta,
      gamma: gyroscope.gamma,
      x: getX(gyroscope.alpha),
      y: getY(gyroscope.beta),
    };
    screen.emit('position', newPosition);
  });

  socket.on('slideIndex', function(slide) {
    console.log('slideIndex', slide);
    screen.emit('slideIndex', slide.index);
  });
});

screen.on('connection', function(socket) {
  console.log('new SCREEN connection' + socket.id);
  socket.emit('message', 'screen side');
});

server.listen(serverPort, function() {
  console.log('server up and running at %s port', serverPort);
});
